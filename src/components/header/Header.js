import React from 'react'
import { connect } from 'react-redux'

import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from '../cart-icon/CartIcon'
import { auth } from '../../firebase/firebase-util'
import { HeaderContainer, LogoContainer, OptionsContainer,OptionLink,Option } from './header-style'
import CartDropdown from '../cart-dropdown/CartDropdown'

const Header = ({currentUser,hidden}) => {
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
                 <CartIcon/>
            </OptionsContainer>
            {hidden ? null:(<CartDropdown/>)}
        </HeaderContainer>
    )
}

const mapStateToProps = ({user:{currentUser},cart:{hidden}})=>({
    currentUser,hidden
})

export default connect(mapStateToProps)(Header)
