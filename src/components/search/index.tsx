import React from 'react'
import { Icon, InputSearch, ContentSearch } from './styles'
import { SearchProps } from './types'

const Search: React.FC<SearchProps> = props => {
    return (
        <ContentSearch className={props.className}>
            <InputSearch type="text" placeholder='Pesquisar...' {...props} />
            <Icon />
        </ContentSearch>
    )
}

export default Search