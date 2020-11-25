import React from 'react'
import { CollectionItemContainer, FooterCollectionContainer, ImageContainer, ItemName, ItemPrice } from './Collection-items-style'
import CustomButton from '../custom-button/CustomButton'

const CollectionItem = ({name,price,imageUrl}) => {
    return (
        <CollectionItemContainer>
            <ImageContainer style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
            <FooterCollectionContainer>
                <ItemName>{name}</ItemName>
                <ItemPrice>{price}</ItemPrice>
            </FooterCollectionContainer>
            <CustomButton inverted >Add To Cart</CustomButton>
        </CollectionItemContainer>
    )
}

export default CollectionItem
