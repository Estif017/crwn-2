import styled from "styled-components";

export const CartDropdownContainer=styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    top: 90px;
    right: 40px;
    z-index: 5;
    background-color: white;
    border: 1px solid black;

    button{
        margin-top: auto;
    }
`

export const DropDownItems=styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`