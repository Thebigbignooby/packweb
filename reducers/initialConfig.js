import { initConfig } from '../knowledge-base/webpackConfigOptions.js'

const initialConfig = (state = initConfig, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default initialConfig

export const getFinalConfig = (initialConfig, configByOption, selectedOptions) => {
  let intermediateConfigs = {}
  selectedOptions.forEach(option => {
    Object.assign(intermediateConfigs, configByOption[option])
  })
  let finalConfig = { ...initialConfig, ...intermediateConfigs }
  finalConfig = escapeRegex(JSON.stringify(finalConfig, null, 2))
  return 'module.exports = ' + finalConfig
}

function escapeRegex(string) {
  return string.replace(/(\"\/)|(\/\")/g, "/");
}
