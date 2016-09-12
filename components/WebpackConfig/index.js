import React, { PropTypes } from 'react'

require('../../vendor/highlight/styles/atom-one-dark.css')
import Highlight from 'react-highlight.js'

const WebpackConfig = ({ finalConfig }) => (
  <Highlight language="javascript">
    { JSON.stringify(finalConfig, null, 2) }
  </Highlight>
)

function escapeRegex(string) {
  return string.replace(/[\[\](){}?*+\^$\\.|\-]/g, "\\$&");
}

WebpackConfig.propTypes = {}

export default WebpackConfig
