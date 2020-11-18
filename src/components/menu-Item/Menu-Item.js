import React from 'react'
import { BackgroundImgContainer, ContentContainer, ContentSubTitle, ContentTitle, MenuItemContainer } from './Menu-Item-style'

const MenuItem = ({title,imageUrl,size}) => {
    console.log(imageUrl);
    return (
        <MenuItemContainer size={size}>
            <BackgroundImgContainer
            imageUrl={imageUrl}
            className='background-image'
            />
            <ContentContainer className='content'>
                <ContentTitle className="title">{title.toUpperCase()}</ContentTitle>
                <ContentSubTitle className="subtitle">SHOP NOW</ContentSubTitle>
            </ContentContainer>
        </MenuItemContainer>
    )
}

export default MenuItem
