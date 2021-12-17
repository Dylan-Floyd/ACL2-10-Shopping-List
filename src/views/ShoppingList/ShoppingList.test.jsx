import { render, screen, fireEvent, waitFor, within } from '@testing-library/react'
import ShoppingList from './ShoppingList.jsx'

const items = [{
  text: 'Example',
  id: 'a very unique id',
  completed: false
}]

beforeEach(() => {
  render(<ShoppingList items={items} />)
})

it('can delete an item', async () => {
  const deleteButton = await screen.findByText(/delete/i)
  expect(deleteButton).toBeInTheDocument()
  fireEvent.click(deleteButton)
  await waitFor(() => expect(deleteButton).not.toBeInTheDocument())
}) 

it('can add an item', async () => {
  const input = await screen.findByPlaceholderText(/new item/i)
  const addButton = await screen.findByText('Add Item')
  fireEvent.change(input, {target: {value: 'asdf'}})
  fireEvent.click(addButton)
  const allEditButtons = await screen.findAllByText('Edit')
  expect(allEditButtons.length).toEqual(2)
})

it('can edit an item', async () => {
  const editButton = await screen.findByText('Edit')
  fireEvent.click(editButton)
  const input = await screen.findByDisplayValue('Example')
  fireEvent.change(input, {target: {value: 'asdf'}})
  const saveButton = await screen.findByText('Save')
  fireEvent.click(saveButton)
  const newItemText = await screen.findByText('asdf')
  expect(newItemText).toBeInTheDocument()
})

it('can complete an item', async () => {
  const checkbox = await screen.findByRole('checkbox')
  fireEvent.click(checkbox)
  const delTag = await screen.findByTestId('del-tag')
  const strikenText = await within(delTag).findByText('Example')
  expect(strikenText).toBeInTheDocument()
})