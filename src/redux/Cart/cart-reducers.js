import { cartActionTypes } from "./cart-types"

const INITIAL_STATE={
    hidden:true
}

const CartReducers=(state = INITIAL_STATE,action)=>{
    switch (action.type){
        case cartActionTypes.TOGGLE_CART_ICON:
            return { 
                ...state,
                hidden:!state.hidden
             }
        default:
            return state
    }
}

export default CartReducers