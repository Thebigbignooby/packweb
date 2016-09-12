import { connect } from 'react-redux'

import WebpackConfig from '../WebpackConfig'
import { getFinalConfig } from '../../reducers'

const mapStateToProps = (state) => ({
  finalConfig: getFinalConfig(state)
})

const ConnectedWebpackConfig = connect(
  mapStateToProps
)(WebpackConfig)

export default ConnectedWebpackConfig
