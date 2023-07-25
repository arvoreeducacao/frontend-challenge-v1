import styled from 'styled-components'

export const Container = styled.div`
    margin: 140px 0;
`

export const Content = styled.div`
    width: 100%;

    @media (min-width: 1408px) {
        max-width: 1920px;
        margin: 20px auto;
    }
`

export const ContentList = styled.div`
    width: 100%;
    padding: 16px;
    max-width: 375px;
    &:nth-child(3) {
        background-color: #DAF6F3;
    }

    @media (min-width: 395px) {
        max-width: 395px;
    }
  
    @media (min-width: 414px) {
        max-width: 414px;
    }
   
    @media (min-width: 768px) {
        max-width: 768px;
    }
   
    @media (min-width: 820px) {
        max-width: 820px;
    }
    
    @media (min-width: 912px) {
        max-width: 912px;
    }
   
    @media (min-width: 992px) {
        max-width: none;
    }

   
`

export const ContentItem = styled.div`
    display: flex;
    width: calc(100% - 80px);
    max-width: 768px;

    > img {
        width: 198px;
        height: 296px;
    }
    

    @media (min-width: 768px) {
        max-width: 768px;
        width: 100%;
        margin: 20px auto;
    }

    @media (min-width: 992px) {
        max-width: 1296px;
    }
   
   
`

export const TitleCategory = styled.div`
    color: #053b4b;
    font-size: 16px;
    font-weight: 700;
    max-width: 400px;
    padding: 30px 0 0;

    @media (min-width: 1408px) {
        margin: 0 auto;
        padding: 30px 0 0;
        max-width: 1296px;
    }
`

export const Shelf = styled.div`
width: 100%;      
`