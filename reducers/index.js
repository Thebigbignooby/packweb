import * as webpackOptions from '../knowledge-base/webpackConfigOptions'

const packweb = (state = webpackOptions.initConfig, action) => {
  switch (action.type) {
    case 'TOGGLE_ITEM':
      let optionName = action.itemId
      let oldPackages = state.packages
      let newPackages = webpackOptions[optionName].packages
      let oldWebpackConfig = state.webpackConfig
      let newWebpackConfig = webpackOptions[optionName].webpackConfig
      return {
        packages: [...oldPackages,...newPackages],
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
