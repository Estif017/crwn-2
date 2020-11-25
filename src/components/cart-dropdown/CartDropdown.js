import React from 'react'
import { CartDropdownContainer, DropDownItems } from './cart-dropdown-styles'
import CustomButton from '../custom-button/CustomButton'

const CartDropdown = () => {
    return (
        <CartDropdownContainer>
            <DropDownItems/>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </CartDropdownContainer>
    )
}

export default CartDropdown
