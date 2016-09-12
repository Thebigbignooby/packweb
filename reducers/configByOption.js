import { initConfigByOption } from '../knowledge-base/webpackConfigOptions.js'

const configByOption = (state = initConfigByOption, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default configByOption

export const getConfigBySelectedOptions = (state, selectedOptions) => {
  let config = {}
  selectedOptions.forEach(option => {
    config[state.option]
  })
  console.log(config);
}
