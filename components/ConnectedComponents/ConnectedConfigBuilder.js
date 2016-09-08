import { connect } from 'react-redux'

import { toggleOption } from '../../actions'
import ConfigBuilder from '../ConfigBuilder'

const mapStateToProps = (state) => ({
  allPossibleOptions: state.allPossibleOptions
})

const ConnectedConfigBuilder = connect(
  mapStateToProps
)(ConfigBuilder)

export default ConnectedConfigBuilder
