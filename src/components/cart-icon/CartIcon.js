import React from 'react'
import { CartIconContainer, CartItemCounter } from './cart-icon-styles'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import { toggleCartIcon } from '../../redux/Cart/cart-actions'

const CartIcon = ({toggleCartIcon}) => {
    return (
        <CartIconContainer onClick={toggleCartIcon}>
            <ShoppingIcon className='shopping-icon'/>
            <CartItemCounter>0</CartItemCounter>
        </CartIconContainer>
    )   
}
const mapDispatchToProps = dispatch=>({
    toggleCartIcon:()=>dispatch(toggleCartIcon())
})

export default connect(null,mapDispatchToProps)(CartIcon)
