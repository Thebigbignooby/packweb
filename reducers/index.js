import * as webpackOptions from '../knowledge-base/webpackConfigOptions'

const packweb = (state = webpackOptions.initConfig, action) => {
  switch (action.type) {
    case 'TOGGLE_OPTION':
      if (state.activeOptions.includes(action.optionName)) {
        return removeOption(state, action)
      } else {
        return addOption(state, action)
      }
    default:
      return state
  }
}
export default packweb

const removeOption = (state, action) => {
  let option = webpackOptions[action.optionName]

  let activeOptions = removeItemFromArray(state.activeOptions, action.optionName)

  let packages = removeOptionPackages(state.packages, option.packages)

  // TODO: remove optionName from webpackConfig

  return {
    activeOptions,
    packages
  }
}

const removeOptionPackages = (optionPackages, packagesToRemove) => {
  return optionPackages.filter( p => {
    if (packagesToRemove.includes(p)) return false
    else return true
  })
}

const removeItemFromArray = (theArray, theItem) => {
  let deleteIndex = theArray.indexOf(theItem)
  return [
    ...theArray.slice(0, deleteIndex),
    ...theArray.slice(deleteIndex + 1)
  ]
}

const addOption = (state, action) => {
  let activeOptions = [...state.activeOptions, action.optionName]
  let oldPackages = state.packages
  let newPackages = webpackOptions[action.optionName].packages
  let oldWebpackConfig = state.webpackConfig
  let newWebpackConfig = webpackOptions[action.optionName].webpackConfig
  return {
    activeOptions,
    packages: [...oldPackages,...newPackages],
    webpackConfig: {
      ...oldWebpackConfig,
      ...newWebpackConfig
    }
  }
}

const allOptions = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_OPTION':

    default:
      return state
  }
}

const byOption = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_OPTION':

    default:
      return state
  }
}
