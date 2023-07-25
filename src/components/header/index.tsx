import React, { useState } from "react";
import { Container, Content, ContentSearch, ContentUser } from "./styles";
import Search from "../search";

const Header: React.FC = () => {
  const [term, setTerm] = useState("");
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
        <ContentSearch>
          <Search value={term} />
        </ContentSearch>
        <ContentUser>
          <p>login</p>
        </ContentUser>
      </Content>
    </Container>
  );
};

export default Header;
