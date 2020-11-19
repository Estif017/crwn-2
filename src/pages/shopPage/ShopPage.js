import React, { useState } from 'react'
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'
import SHOP_DATA from './shopData'

const ShopPage = () => {
    const [collections,setCollections]= useState(SHOP_DATA)
    return (
        <div className="shop-page">
            {
                collections.map(({id,...otherCollections})=>(
                    <CollectionPreview key={id} {...otherCollections}/>
                ))
            }
        </div>
    )
}

export default ShopPage
