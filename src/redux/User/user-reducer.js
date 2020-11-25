import { UserActionTypes } from "./uset-types"

const INITIAL_STATE={
    currentUser:null
}

const userReducer=(state=INITIAL_STATE, action)=>{
    switch (action.type){
        case UserActionTypes.setCurrentUser:
            return{
                ...state,
                currentUser:action.payload
            }
        default:
            return state
    }
}

export default userReducer