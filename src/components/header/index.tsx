import React, { useState } from "react";
import { Container, Content, ContentUser } from "./styles";
import Autocomplete from "../autocomplete";

const Header: React.FC = () => {
  const [term, setTerm] = useState("oie");
  const [value, setValue] = useState(0);
  return (
    <Container>
      <Content>
        <div>
          <a href="/">
            <img
              src="https://s3-sa-east-1.amazonaws.com/files.arvoredelivros.com.br/arvore-library-assets/images/logos/logo-livros-horizontal-white.svg"
              alt="Arvore Livros"
              width="168"
              height="25"
            />
          </a>
        </div>
        <h1>{value} - {term}</h1>
        <Autocomplete 
          searchProps={{
            value: term,
            onChange: (e: any,) => {
              setTerm(e.currentTarget.value);
            }
          }}
          suggestions={[{ label: 'Gus', value: 42 }]}
          value={value}
          onChange={
            (e,s) => {
              setValue(s?.value || 0);
              if(s?.label) setTerm(s.label);
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
