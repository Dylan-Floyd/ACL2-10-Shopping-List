import React, { useReducer, useState } from 'react'
import AddItemForm from '../../components/AddItemForm/AddItemForm.jsx'
import ItemList from '../../components/ItemList/ItemList.jsx'
import { v4 as uuid } from 'uuid'

const defaultInitalItems = [{
  text: 'Example',
  id: uuid(),
  completed: false
}]

const itemsReducer = (items, action) => {
  switch(action.type) {
    case 'add': {
      return [...items, action.item]
    }
    case 'update': {
      return items.map(item => {
        if(item.id === action.item.id) return action.item
        return item
      })
    }
    case 'delete': {
      return items.filter(item => item.id !== action.item.id)
    }
    default: {
      throw new Error('Invalid action type dispatched to itemsReducer')
    }
  }
} 

export default function ShoppingList(props) {
  const initalItems = props.items ?? defaultInitalItems
  const [newItem, setNewItem] = useState('')
  const [items, itemsDispatch] = useReducer(itemsReducer, initalItems)

  const addItem = () => {
    itemsDispatch({
      type: 'add',
      item: { text: newItem, id: uuid(), completed: false }
    })
    setNewItem('')
  }

  const updateItem = (item) => {
    itemsDispatch({
      type: 'update',
      item
    })
  }

  const deleteItem = (item) => {
    itemsDispatch({
      type: 'delete',
      item
    })
  }

  return (
    <div>
      <h2>Shopping List!</h2>
      <AddItemForm {...{ newItem, setNewItem, handleSubmit: addItem }}/>
      <ItemList {...{ items, updateItem, deleteItem }} />
    </div>
  )
}
