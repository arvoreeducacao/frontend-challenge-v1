![image](https://assets-global.website-files.com/61155c49f7b752684a9f0584/61201e989ae795462db99155_logo-arvore.svg)

<div id="user-content-toc">
  <ul>
    <summary><h1 style="display: inline-block;">Challenge Frontend</h1></summary>
  </ul>
</div>

## Description

Este teste técnico fornece uma aplicação já iniciada por um desenvolvedor, ou seja, é um dos desafios que fazem parte do nosso dia-a-dia enquanto time tech na Árvore.

O desafio em si propõe a construção de uma feature, um campo de busca com autocomplete aplicado.

Ainda como parte do desafio é preciso fazer pequenos ajustes de layout (responsividade e/ou ajustes nos comportamentos dos componentes).

<br />

## Requirements
### Feature Busca com autocomplete aplicado:
Nossa busca atualmente está sem um autocomplete para ajudar o usuário a encontrar o termo mais relevante a ser pesquisado, e para entregar essa melhoria de experiência se deve contemplar os seguintes critérios:

- Toda vez que o usuário focar no campo de texto e o seu valor mudar, deve mostrar uma lista de sugestões.
- Toda vez que o input de texto perder o foco (seja clicando fora ou apertando Tab) as sugestões devem desaparecer.
- Quando o usuário escrever algo no campo de texto, deve fazer uma chamada na API e mostrar as sugestões, atualizando a cada nova mudança, sem a necessidade de clicar no botão de pesquisa ou pressionar ENTER.
- Quando o usuário começar a escrever o nome do livro, o componente só deverá fazer o trigger de chamada para a API depois de 250ms, evitando chamadas excessivas para a API.
- Quando a sugestão aparecer na tela e o usuário apontar o mouse para qualquer um dos resultados, a opção que estiver com o cursor do mouse em cima deve ficar em destaque.
- O resultado da pesquisa além do campo de busca com autocomplete deve ser populado em tela.
- Testes unitários devem ser desenvolvidos para a nova feature.

<br />

### Integração:

A Home e Página de busca devem ser populada com a [API do google](https://developers.google.com/books/docs/v1/getting_started).

###### Exemplo de chamada pra a API:

`https://www.googleapis.com/books/v1/volumes?q=Query&startIndex=0&maxResults=10`

##### q representa:

_o termo da busca_

##### startIndex representa:

_A posição de partida dentro da lista, default é 0._

##### maxResults representa:

_O número máximo de resultados. O default é 10, e o valor máximo permitido é 40._
<br />

###### Exemplo de resultado de payload:

```bash
  "kind": "books#volumes",
  "totalItems": 200,
  "items": [
        { "kind": "books#volumes","id": "0S_uAAAAMAAJ",
        "etag": "vQmTa+Fhr10",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/0S_uAAAAMAAJ",
        "volumeInfo": {
            "title": "The Adventures of Tom Sawyer",
            "authors": ["Mark Twain"],
            "publishedDate": "1965",
            "description": "\"It's a lazy Mississippi River town, a place where...",
            "industryIdentifiers": [
              {"type": "OTHER",
                "identifier": "UOM:39015002775412"
              }
            ]
        }
    ]
```
<br />

### Layout:
Como forma de demonstrar o comportamento esperado dos dados que populam a tela da home e página de busca, mockamos os dados no front para permitir, também, melhor entendimento de layout.

Abaixo estão alguns ajustes esperados no layout:

- Aplicar o layout responsivo em todas as telas.
- O filtro de pesquisa precisa estar responsivo, hoje ele funciona apenas para a versão desktop.
- Segue abaixo os valores de media queries que utilizamos na Árvore como referência:
    - tablet: 768px
    - desktop: 992px
    - desktop Large: 1216px
    - desktop Xlarge: 1408px


**Obs.: O componente carrossel faz uso de uma lib terceira (react-slick), portanto ele não deve ser contemplado como ajuste de layout/comportamento de componente.**

<br />

### Filtro de pesquisa:
O filtro de pesquisa não está 100% funcional, é preciso fazer alguns ajustes para que ele possa funcionar como esperado do componente. Não há a necessidade de fazer a integração da API para esse caso e muito menos testes unitários, porém se o candidato desejar fazer, é um plus.

- Os filtros de pesquisa devem popular a página de pesquisa de acordo com os filtros selecionados pelo usuário.
- O filtro de pesquisa deve contemplar os seguintes campos:
  - **1 - Preço**
    - de `R$0` até `R$30`
    - de `R$31` até `R$50`
    - de `R$51` até `R$100`
    - Mais de `R$100`
   - **2 - Disponibilidade para venda**
     - disponível
     - não disponível
   - **3 - Formatos disponíveis**
     - Epub
     - PDF


**Obs.: Candidatos a nível PLENO devem incluir os requisitos do filtro de pesquisa contemplados na seção [nice to have](#nice-to-have) desse documento.**
<br />
<br />

## Submit for review:
Para que o teste possa ser avaliado, é importante que o candidato:
- Suba o teste em um repositório no github.
- Caso o repositório esteja privado, compartilhar o repo com os seguintes desenvolvedores: **@thaisquintana** e **@caiodsc**.
- Mantenha o histórico de commits visíveis no repo.
- Adicione um README para instruir o avaliador a rodar a aplicação.
<br />

## Nice to have

#### Filtro de pesquisa:
- Testes unitários aplicados ao componente filtro de pesquisa.
- Diferenciação do comportamento do componente quando responsivo.

#### Performance:
- Adicionar uma camada de cache para os dados populados no campo de busca com autocomplete.
- Scroll infinito na página de busca.

#### Cobertura de testes com e2e:
- Teste aplicado no campo de busca com o redirecionamento para a página de busca.
- Teste aplicado na página de busca com dados populados pela API como resultados da pesquisa feita pelo usuário (com e sem filtro aplicado na busca).


