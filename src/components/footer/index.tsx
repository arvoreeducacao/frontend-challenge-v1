import React from "react";
import {
  Container,
  Content,
  ContentItem,
  ContentLink,
  ContentList,
  ContentText,
} from "./styles";
import { FooterProps } from "./types";

const Footer: React.FC<FooterProps> = ({text, privacyText, termsAndUsageText, helpText }) => {
  return (
    <Container>
      <Content>
        <ContentText>{text}</ContentText>
      </Content>
      <Content>
        <ContentList>
          <ContentItem>
            <ContentLink href="https://www.arvore.com.br/arvore-politica-de-privacidade-completo">
              {privacyText}
            </ContentLink>
          </ContentItem>
          <ContentItem>
            <ContentLink href="https://s3-sa-east-1.amazonaws.com/files.arvoredelivros.com.br/Contrato/Termos_de_uso_e_contratacao_Arvore.pdf">
              {termsAndUsageText}
            </ContentLink>
          </ContentItem>
          <ContentItem>
            <ContentLink href="https://central.arvore.com.br/central/estudante?utm_source=plataforma&utm_medium=referral&utm_content=rodape_ajuda_estudante&utm_campaign=central_2023">
              {helpText}
            </ContentLink>
          </ContentItem>
        </ContentList>
      </Content>
    </Container>
  );
};

export default Footer;
