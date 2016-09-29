export const editString = (optionName, stringToEdit) => ({
  type: 'EDIT_STRING',
  optionName,
  stringToEdit,
})

export const toggleOption = (optionName) => ({
  type: 'TOGGLE_OPTION',
  optionName
})
