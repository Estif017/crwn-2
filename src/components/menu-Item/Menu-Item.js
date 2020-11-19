import React from 'react'
import { useHistory } from 'react-router-dom'
import { BackgroundImgContainer, ContentContainer, ContentSubTitle, ContentTitle, MenuItemContainer } from './Menu-Item-style'

const MenuItem = ({items:{title,imageUrl,size,linkUrl}}) => {
    const history= useHistory()
    return (
        <MenuItemContainer 
        onClick={()=>history.push(linkUrl)}
        size={size}>
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
