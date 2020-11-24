import { UserActionTypes } from "./uset-types";

export const setCurrentUser=user => ({
    type:UserActionTypes.setCurrentUser,
    payload: user
})