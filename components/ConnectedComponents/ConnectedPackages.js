import { connect } from 'react-redux'

import { toggleOption } from '../../actions'
import Packages from '../Packages'

const filterPackagesBySelectedOptions = (state) => {
  return state.packages

  let packages = []
  state.selectedOptions.map(option => {
    packages.push(state.packagesByOption[option])
  })

}

const mapStateToProps = (state) => ({
  packages: filterPackagesBySelectedOptions(state)
})

const ConnectedPackages = connect(
  mapStateToProps
)(Packages)

export default ConnectedPackages
