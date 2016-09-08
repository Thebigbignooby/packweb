const selectedOptions = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_OPTION':
      let option = action.optionName
      if (state.includes(option)) {
        return removeItemFromArray(state, option)
      } else {
        return [...state, option]
      }
    default:
      return state
  }
}

export default selectedOptions

const removeItemFromArray = (theArray, theItem) => {
  let deleteIndex = theArray.indexOf(theItem)
  return [
    ...theArray.slice(0, deleteIndex),
    ...theArray.slice(deleteIndex + 1)
  ]
}
