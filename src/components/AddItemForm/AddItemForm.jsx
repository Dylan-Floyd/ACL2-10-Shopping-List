import React from 'react'

export default function AddItemForm({
  newItem,
  setNewItem,
  handleSubmit
}) {
  return (
    <div className='w-full grid grid-cols-5'>
      <input
        placeholder='New item'
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        className='rounded m-1 p-2 outline-green-400 hover:outline focus:outline col-start-1 col-end-5'/>
      <button
        onClick={handleSubmit}
        className='bg-green-300 border-green-600 border-b p-2 m-1 rounded'
      >Add Item</button>
    </div>
  )
}
