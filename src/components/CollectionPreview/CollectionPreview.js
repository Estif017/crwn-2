import React from 'react'
import CollectionItem from '../Collection-Items/CollectionItem'
import { CollectionPreviewContainer, CollectionPreviewTitle, PreviewContainer } from './collection-preview-style'

const CollectionPreview = ({title,items}) => {
    return (
        <CollectionPreviewContainer>
            <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
            <PreviewContainer>
                {
                    items
                    .filter((item, index)=>index<4)
                    .map(({id,...otherItems})=>(
                        <CollectionItem key={id} {...otherItems}/>
                    ))
                }
            </PreviewContainer>
        </CollectionPreviewContainer>
    )
}

export default CollectionPreview
