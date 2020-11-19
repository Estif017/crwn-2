import React from 'react'
import { CollectionItemContainer, FooterCollectionContainer, ImageContainer, ItemName, ItemPrice } from './Collection-items-style'

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
        </CollectionItemContainer>
    )
}

export default CollectionItem
