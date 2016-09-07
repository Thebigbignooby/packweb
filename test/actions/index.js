import expect from 'expect'

const toggleOption = (optionName) => ({
  type: 'TOGGLE_OPTION',
  optionName
})

export const toggleOptionTest = () => {
  expect(
    toggleOption('es6')
  ).toEqual({
    type: 'TOGGLE_OPTION',
    optionName: 'es6'
  })
}
