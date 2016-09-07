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
  let deleteIndex = getIndexOfItemInArray(state.activeOptions, action.optionName)
  let activeOptions = [
    ...state.activeOptions.slice(0, deleteIndex),
    ...state.activeOptions.slice(deleteIndex + 1)
  ]
  let packages = state.packages.filter( p =>
    removeOptionPackages(p, webpackOptions[action.optionName].packages)
  )
  // TODO: remove optionName from webpackConfig
  return {
    activeOptions,
    packages
  }
}

const removeOptionPackages = (p, packagesToRemove) => {
  if (packagesToRemove.includes(p)) return false
  else return true
}

const getIndexOfItemInArray = (theArray, theItem) => {
  let Index
  theArray.map((o, index) => {
    if (o === theItem)
      Index = index
  })
  return Index
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
