import expect from 'expect'

const toggleItem = (itemId) => ({
  type: 'TOGGLE_ITEM',
  itemId: itemId
})

export const toggleItemTest = () => {
  expect(
    toggleItem('es6')
  ).toEqual({
    type: 'TOGGLE_ITEM',
    itemId: 'es6'
  })
}
