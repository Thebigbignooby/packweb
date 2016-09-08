import { connect } from 'react-redux'

import { toggleOption } from '../../actions'
import Packages from '../Packages'

import { getPackagesBySelectedOptions } from '../../reducers'

const mapStateToProps = (state) => ({
  packages: getPackagesBySelectedOptions(state)
})

const ConnectedPackages = connect(
  mapStateToProps
)(Packages)

export default ConnectedPackages
