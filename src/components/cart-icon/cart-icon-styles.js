import styled from "styled-components";

export const CartIconContainer=styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
    
    .shopping-icon{
        width: 24px;
        height: 24px;
    }
`

export const CartItemCounter=styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
`