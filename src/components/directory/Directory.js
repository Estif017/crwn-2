import React, { useState } from 'react'
import MenuItem from '../menu-Item/Menu-Item'
import { DirectoryMenu } from './Directory-style'


const Directory = () => {
    const [sections,useSections]=useState(
        [
            {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl:'/hats'
              },
              {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl:'/jackets'
              },
              {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl:'/sneakers'
              },
              {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl:'/womens'
              },
              {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl:'/mens'
              }
        ]
    )
    return (
        <DirectoryMenu>
            {
                sections.map((items)=>(
                    <MenuItem key={items.id} items={items}/>
                ))
            }
        </DirectoryMenu>
    )
}

export default Directory