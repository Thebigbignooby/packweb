import { initPackagesByOption } from '../knowledge-base/webpackConfigOptions.js'

const packagesByOption = (state = initPackagesByOption, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default packagesByOption

export const getPackagesBySelectedOptions = (state, selectedOptions) => {
  let allPackages = []
  selectedOptions.forEach(option => {
    allPackages.push(...state[option])
  })
  return [ ...new Set(allPackages) ]
}
