import React, { useState } from 'react'
import MenuItem from '../menu-Item/Menu-Item'
import { DirectoryMenu } from './Directory-style'


const Directory = () => {
    const [sections,useSections]=useState(
        [
            {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1
              },
              {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2
              },
              {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3
              },
              {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4
              },
              {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5
              }
        ]
    )
    return (
        <DirectoryMenu>
            {
                sections.map(({title,imageUrl,id,size})=>(
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                ))
            }
        </DirectoryMenu>
    )
}

export default Directory
