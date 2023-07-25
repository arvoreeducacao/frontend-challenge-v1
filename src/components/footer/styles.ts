import styled from 'styled-components'

export const Container = styled.div`
    background-color: #fff;
    width: 100%;
    border-top: 1px solid #dee1e6;
    display: block;
    padding: 16px;
    text-align: center;
    height: auto;
    max-width: 375px;


    @media (min-width: 395px) {
        max-width: 395px;
    }
  
    @media (min-width: 414px) {
        max-width: 414px;
    }
    
    @media (min-width: 768px) {
        max-width: 768px;
        margin: 20px auto;
    }
    
    @media (min-width: 912px) {
        max-width: 912px;
    }

    @media (min-width: 992px) {
      width: 100%;
      max-width: none;
      padding: 16px 0 0;
      align-items: baseline;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: fixed;
      bottom: -23px;
      left: 0;
      right: 0;
      z-index: 2;
      height: 90px;
    }


    
`
export const Content = styled.div`
    background-color: #fff;
    width: 100%;

    @media (min-width: 992px) {
        padding: 0;
        width: auto;
        max-width: 1280px;
        margin: 0 auto;
    }
`

export const ContentText = styled.p`
    font-size: 12px; 
    color: #b2b4b9;
`

export const ContentList = styled.ul`
    list-style: none;
    padding-left: 0;
    font-size: 16px;
    display: block;

    @media (min-width: 992px) {
        display: flex;
        justify-content: space-between;
    }
`

export const ContentItem = styled.li`
    border: 1px solid #dee1e6;
    padding: 12px 16px;
    border-radius: 12px;
    margin: 8px 0;

    &:hover {
        border-color: #86878b;
    }

    @media (min-width: 992px) {
        margin: 0 6px;
    }
`

export const ContentLink = styled.a`
    text-decoration: none;
    color: #b2b4b9;
    font-weight: 700;

    &:hover {
        color: #86878b;
    }
`