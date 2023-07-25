import styled from "styled-components";


export const Content = styled.div`
    background-color: #fff;
    width: 100%;

    @media (min-width: 992px) {
        padding: 0;
        margin: 0 auto;
        width: 19%;
    }

`
export const ContentTitle = styled.p`
    color: #9EAEB7;
    font-size: 16px;
    font-weight: 700;
`
export const Button = styled.button`
    height: 40px;
    border-radius: 10px;
    cursor: pointer;
    padding: 16px;
    text-transform: uppercase;
    background-color: #ADB7BF;
`
export const FilterTitle = styled.p`
    color: ;
    font-size: 16px;
    font-weight: 700;
`
export const FilterContent = styled.div`
    & > ul {
        list-style-type: none;
        padding: 0;
        margin-bottom: 8px;
    }
    & > ul > li {
        margin-bottom: 3px;
    }
    & > ul > li > span {
        color: #053B4B;
    }

`