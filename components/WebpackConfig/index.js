import React, { PropTypes } from 'react'

require('../../vendor/highlight/styles/atom-one-dark.css')
import Highlight from 'react-highlight.js'

const WebpackConfig = ({ finalConfig }) => (
  <Highlight language="javascript">
    { finalConfig }
  </Highlight>
)

WebpackConfig.propTypes = {}

export default WebpackConfig
