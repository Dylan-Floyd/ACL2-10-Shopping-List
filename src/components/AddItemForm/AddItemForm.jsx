import React from 'react'

export default function AddItemForm({
  newItem,
  setNewItem,
  handleSubmit
}) {
  return (
    <div>
      <input placeholder='New item' value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
      <button onClick={handleSubmit}>Add Item</button>
    </div>
  )
}
