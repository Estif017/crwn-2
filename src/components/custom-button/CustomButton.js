import React from 'react'
import { Button } from './custom-button-style'

const CustomButton = ({children,isGoogleSignIn,inverted,...otherProps}) => {
    return (
    <Button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn?'isGoogle-sign-in':''}`} {...otherProps}>{children}</Button>
    )
}

export default CustomButton
