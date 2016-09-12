import { combineReducers } from 'redux'

import packagesByOption, * as fromPackagesByOption from './packagesByOption'
import configByOption, * as fromConfigByOption from './configByOption'
import selectedOptions from './selectedOptions'
import initialConfig, * as fromInitialConfig from './initialConfig'

export default combineReducers({
  packagesByOption,
  configByOption,
  selectedOptions,
  initialConfig
})

export const getPackagesBySelectedOptions = (state) =>
  fromPackagesByOption.getPackagesBySelectedOptions(state.packagesByOption, state.selectedOptions)

export const getFinalConfig = (state) =>
  fromInitialConfig.getFinalConfig(state.initialConfig, state.configByOption, state.selectedOptions)

export const getConfigBySelectedOptions = (state) =>
  fromConfigByOption.getConfigBySelectedOptions(state.configByOption, state.selectedOptions)
