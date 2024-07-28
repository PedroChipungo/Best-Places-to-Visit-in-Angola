import React from 'react'
import Items from '../Items/Items'
import { Author } from '../Items/ItemsInfo/ItemsInfo'

const ItemsContainer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-12 gap-6 sm:px-8 px-5 py-16'>
      <Items Links={Author}  title="Author"/>
    </div>
  )
}

export default ItemsContainer
 