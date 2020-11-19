import React from 'react'

import {ReactComponent as Logo} from '../../assets/crown.svg'
import { HeaderContainer, LogoContainer, OptionsContainer,OptionLink } from './header-style'

const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'><Logo/></LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                <OptionLink to='/signin'>SIGN IN</OptionLink>
            </OptionsContainer>
        </HeaderContainer>
    )
}

export default Header
