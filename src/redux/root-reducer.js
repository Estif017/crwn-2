import { combineReducers } from "redux";
import CartReducers from "./Cart/cart-reducers";
import userReducer from "./User/user-reducer";

export default combineReducers({
    user:userReducer,
    cart:CartReducers
})