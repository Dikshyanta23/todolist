import React from 'react'
import SingleItem from './SingleItem'

const Items = ({items, removeItem, editItem}) => {

  return (
    <section className="items">
      {items.map((item) => {
        return <SingleItem key={item.id} {...item}  removeItem = {removeItem} editItem = {editItem}/>;
      })}
    </section>
  )
}

export default Items
