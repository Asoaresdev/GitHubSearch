import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { HeaderContainer } from './styled'

export default function Header() {
    return (
        <HeaderContainer>
            <h1>GitHub Search</h1>
            <FontAwesomeIcon icon= { faSearch } size="2x" />
        </HeaderContainer>
    )
}
