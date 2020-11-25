import { cartActionTypes } from "./cart-types";

export const toggleCartIcon=()=>({
    type:cartActionTypes.TOGGLE_CART_ICON
})

export const addCartItem=item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})