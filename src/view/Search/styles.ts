import styled from 'styled-components'


export const Container = styled.div`
    padding: 16px;
    width: 100%;
    
    @media (min-width: 992px) {
        margin: 140px 0;
    }

    
`

export const Content = styled.div`
    width: 100%;
    display: flex;

    @media (min-width: 992px) {
        padding: 0;
        margin: 0 auto;
    }
`

export const ContentResults = styled.div`
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    justify-content: center;
    gap: 48px;
    display: grid;
    margin: 49px 0;
    width: 46%;

`

export const ContentResultsWrapper = styled.div`
    margin: 10px 0;
`

export const ContentResultsCover = styled.div`
    img {
        width: 124px;
        height: 185px;
    }
`

export const ContentResultsTitle = styled.div`
    label {
        font-size: 14px;
        color: #86878b;
    }
`

export const ContentResultsCategory = styled.div`
    span {
        font-size: 14px;
        color: #9EAEB7;
    }
`