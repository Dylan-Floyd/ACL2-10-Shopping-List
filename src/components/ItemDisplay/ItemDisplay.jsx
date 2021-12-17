import React, { useState } from 'react'

export default function ItemDisplay({
  item,
  updateItem,
  deleteItem
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [newItemText, setNewItemText] = useState(item.text)

  const handleSaveClick = () => {
    const newItem = {
      ...item,
      text: newItemText
    }
    updateItem(newItem)
    setIsEditing(false)
  }

  const handleCheckboxClick = (newValue) => {
    const newItem  = {
      ...item,
      completed: newValue
    }
    updateItem(newItem)
  }

  //yeesh, tailwind makes for some ugly code
  return (
    <li className='
      bg-gray-300
      hover:bg-gray-400
      group
      grid
      grid-cols-7
      grid-rows-1
      overflow-hidden
      p-2
      border-b-slate-400
      hover:border-b-slate-600
      border-b-2
      rounded-md m-1'
    >
      {isEditing ? <>
        <input
          type="text"
          value={newItemText}
          onChange={({target}) => setNewItemText(target.value)}
          className='
            col-start-1
            col-end-6 col
            row-start-1
            row-end-2
            rounded
            m-1
            p-2
            outline-blue-400
            hover:outline
            focus:outline'
        />
        <button className='
          bg-blue-300
          border-blue-600
          border-b
          p-2
          m-1
          rounded
          col-start-6'
          row
          onClick={handleSaveClick}
        >
          Save
        </button>
      </> : <>
        {/* Not-Editing UI Below */}
        <label
          className='
            col-span-full
            row-start-1
            row-end-2
            col
            my-auto
            hover:cursor-pointer
            text-center
            overflow-hidden'
        >
          {/* Hidden Checkbox */}
          <input
            type="checkbox"
            value={item.completed}
            onClick={({target}) => handleCheckboxClick(target.checked)}
            className='hidden'
          />
          {/* Item Text */}
          {item?.completed ? <del data-testid="del-tag" className='text-2xl mx-auto'>{item.text}</del> : <span className='text-2xl mx-auto'>{item.text}</span>}
        </label>

        {/* Edit Button */}
        <button
          onClick={() => setIsEditing(true)}
          className='bg-orange-300
            border-orange-600
            border-b
            p-2
            m-1
            rounded
            opacity-0
            group-hover:opacity-100
            col-start-6
            col-end-7
            row-start-1
            z-10'
        >
          Edit
        </button>
        {/* End of Not-Editing UI */}
      </>
      }
      
      {/* Delete Button */}
      <button
        onClick={() => deleteItem(item)}
        className='
          bg-red-300
          border-red-600
          border-b
          p-2
          m-1
          rounded
          opacity-0
          group-hover:opacity-100
          row-start-1
          row-end-2
          col-start-7'
      >
        Delete
      </button>
    </li>
  )
}
