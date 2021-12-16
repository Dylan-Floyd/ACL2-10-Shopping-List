import React from 'react'
import ItemDisplay from '../ItemDisplay/ItemDisplay.jsx'

export default function ItemList({
  items,
  updateItem,
  deleteItem
}) {
  return (
    <ul>
      {items?.map(item => <ItemDisplay {...{ item, key: item.id, updateItem, deleteItem }} /> )}
    </ul>
  )
}
