import styled from 'styled-components'
import {ReactComponent as SearchIcon} from '../../assets/search-icon.svg';

export const InputSearch = styled.input`
    background-color: #F1F7FC;
    border: 1px solid #DEE1E6;
    outline: #DEE1E6;
    line-height: 300%;
    font-size: 16px;
    font-weight: 400;
    cursor: default;
    color: #406a76;
    border-radius: 25px;
    padding: 0 38px 0 16px;
    width: 100%;
    box-sizing: border-box;

    &:placeholder {
        color: #406a76;
        opacity: 0;
    }
`

export const Icon = styled(SearchIcon)`
    position: absolute;
    right: 12px;
    top: 16px;
`

export const ContentSearch = styled.div(()=> ({
    width: '100%',
    margin: '16px 0 8px',
}));
