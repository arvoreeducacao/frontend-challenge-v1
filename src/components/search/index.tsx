import React from 'react'
import { Icon, InputSearch } from './styles'
import { SearchProps } from './types'

const Search: React.FC<SearchProps> = ({value}) => {

    return (
        <>
        <InputSearch type="text" value={value} placeholder='Pesquisar...' />
        <Icon />
        </>
    )
}

export default Search