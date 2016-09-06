import * as webpackOptions from '../knowledge-base/webpackConfigOptions'

const packages = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_ITEM':
  }
}

const packweb = (state = webpackOptions.initConfig, action) => {
  switch (action.type) {
    case 'TOGGLE_ITEM':
      let optionName = action.itemId
      let oldPackages = state.packages
      let newPackages = webpackOptions[optionName].packages
      console.log('=============================')
      console.log(...oldPackages)
      console.log('=============================')
      let oldWebpackConfig = state.webpackConfig
      let newWebpackConfig = webpackOptions[optionName].webpackConfig
      return {
        packages: oldPackages.map(p => packages(p, )),
        webpackConfig: {
          ...oldWebpackConfig,
          ...newWebpackConfig
        }
      }
    default:
      return state
  }
}
export default packweb
