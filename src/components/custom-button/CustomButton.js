import React from 'react'
import { Button } from './custom-button-style'

const CustomButton = ({children,...otherProps}) => {
    return (
    <Button className="custom-button" {...otherProps}>{children}</Button>
    )
}

export default CustomButton
