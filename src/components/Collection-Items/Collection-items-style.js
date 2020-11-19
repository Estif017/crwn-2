import styled from "styled-components";

export const CollectionItemContainer= styled.div`
    width: 22%;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
`;
export const ImageContainer = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
`;
export const FooterCollectionContainer=styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;
export const ItemName=styled.span`
    width: 90px;
    margin-bottom: 15px;
`;
export const ItemPrice=styled.span`
    width: 10%;
`;