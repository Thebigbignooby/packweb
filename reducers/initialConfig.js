import { initConfig } from '../knowledge-base/webpackConfigOptions.js'

const initialConfig = (state = initConfig, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default initialConfig

export const getFinalConfig = (initialConfig, configByOption, selectedOptions) => {
  // console.log(configByOption);
  let intermediateConfigs = {}
  selectedOptions.forEach(option => {
    Object.assign(intermediateConfigs, configByOption[option])
  })
  let finalConfig = { ...initialConfig, ...intermediateConfigs }
  // console.log(JSON.stringify(finalConfig, null, 2));
  return finalConfig
}

function escapeRegex(string) {
  return string.replace(/[\[\](){}?*+\^$\\.|\-]/g, "\\$&");
}
