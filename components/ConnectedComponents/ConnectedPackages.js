import { connect } from 'react-redux'

import { toggleOption } from '../../actions'
import Packages from '../Packages'

const mapStateToProps = (state) => ({
  packages: state.packages
})

const ConnectedPackages = connect(
  mapStateToProps
)(Packages)

export default ConnectedPackages
