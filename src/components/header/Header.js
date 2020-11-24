import React from 'react'
import { connect } from 'react-redux'

import {ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase-util'
import { HeaderContainer, LogoContainer, OptionsContainer,OptionLink,Option } from './header-style'

const Header = ({currentUser}) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'><Logo/></LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                {currentUser ?
                    <Option onClick={()=>auth.signOut()}>SIGN OUT</Option>:
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
                 }
            </OptionsContainer>
        </HeaderContainer>
    )
}

const mapStateToProps = state=>({
    currentUser:state.user.currentUser
})

export default connect(mapStateToProps)(Header)
