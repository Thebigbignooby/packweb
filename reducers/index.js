import { combineReducers } from 'redux'

import packagesByOption, * as fromPackagesByOption from './packagesByOption'
import configByOption from './configByOption'
import selectedOptions from './selectedOptions'

export default combineReducers({
  packagesByOption,
  configByOption,
  selectedOptions
})

export const getPackagesBySelectedOptions = (state) =>
  fromPackagesByOption.getPackagesBySelectedOptions(state.packagesByOption, state.selectedOptions)
