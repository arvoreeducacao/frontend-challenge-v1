import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Container, Content, ContentUser, Nav } from "./styles";
import Autocomplete from "../autocomplete";
import { Suggestion } from "../autocomplete/types";

const useDebounce = <T,>(debounceFn: (args:T) => void, delay: number) => {
  const timer = React.useRef<number>(0);

  const debaouncedLoad = (args:T) => {
    if (timer) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      timer.current = 0;
      debounceFn(args);
    }, delay);
  };

  return debaouncedLoad;
};

type CachedFetch = <T>() => {
  loading: boolean;
  data: T | null;
  error: any;
  load: (url: string) => void;
}

const useCachedfetch: CachedFetch = <T,>() => {
  const cache = useRef<{ [key: string]: T }>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | any>(null);
  const [data, setData] = useState<T | null>(null);

  const customFetch = useCallback((url: string) => {
    if (!url) return;
    (async () => {
      setLoading(true);

      if (cache.current[url]) {
        const data = cache.current[url];
        setData(data);
        setLoading(false);
      } else {
        try {
          const response = await fetch(url);
          const data: T = await response.json();
          cache.current[url] = data;
          setData(data);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      }
    })();
  }, []);

  return { loading, data, error, load: customFetch };
};

const useDebounceCachedFetch = <T,>() => {
  const cachedFetch = useCachedfetch<T>();
  
  const debouncedFetch = useDebounce<string>(term => {
    cachedFetch.load(term)
  }, 250);

  return { ...cachedFetch, load: debouncedFetch };
};

const Header: React.FC = () => {
  const [term, setTerm] = useState("");
  const [value, setValue] = useState('');
  const {data, load, loading} = useDebounceCachedFetch<any>();
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if(term) load(`https://www.googleapis.com/books/v1/volumes?q=${term}&startIndex=0&maxResults=10`);
    else setValue('');
  }, [term]);
  
  const suggestions: Suggestion<any>[] = useMemo(() => {
    setTyping(false);
    return data?.items.map(
      (item: any) => ({
        label: item.volumeInfo.title,
        value: item,
      })
    );
  }, [data]);

  return (
    <Container>
      <Content>
        <Nav>
          <a href="/">
            <img
              src="https://s3-sa-east-1.amazonaws.com/files.arvoredelivros.com.br/arvore-library-assets/images/logos/logo-livros-horizontal-white.svg"
              alt="Arvore Livros"
              width="168"
              height="25"
            />
          </a>
          <div>
            <a href="/">Home</a> | <a href="#search">Search</a>
          </div>
        </Nav>
        <Autocomplete
          searchProps={{
            value: term,
            onChange: (e: any,) => {
              setTyping(true);
              setTerm(e.currentTarget.value);
            }
          }}
          loading={loading || typing}
          suggestions={(term && !value) ? suggestions : undefined}
          value={value}
          onChange={
            (_, s) => {
              setValue(s?.value.volumeInfo.title || '');
              s?.label && setTerm(s.label);
            }
          }
        />
        <ContentUser>
          <p>login</p>
        </ContentUser>
      </Content>
    </Container>
  );
};

export default Header;
