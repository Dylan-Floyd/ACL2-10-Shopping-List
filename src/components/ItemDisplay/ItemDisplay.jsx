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

  const renderCheckboxAndTodo = () => {
    return (
      <label>
        <input
          type="checkbox"
          value={item.completed}
          onClick={({target}) => handleCheckboxClick(target.checked)}
        />
        {item?.completed ? (
          <del data-testid="del-tag">{item.text}</del>
        ) : (
          <>{item.text}</>
        )}
      </label>
    )
  }

  const renderEditInput = () => {
    return (
      <input
        type="text"
        value={newItemText}
        onChange={({target}) => setNewItemText(target.value)}
      />
    )
  }

  return (
    <li>
      {isEditing ? <>
        {renderEditInput()}
        <button onClick={handleSaveClick}>Save</button>
      </> : <>
        {renderCheckboxAndTodo()}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>}
      
      <button onClick={() => deleteItem(item)}>Delete</button>
    </li>
  )
}
