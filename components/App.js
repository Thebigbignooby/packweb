import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

import TextField from 'material-ui/TextField';

import ConnectedConfigBuilder from './ConnectedComponents/ConnectedConfigBuilder'
import ConnectedPackages from './ConnectedComponents/ConnectedPackages'
import WebpackConfig from './WebpackConfig'

const App = () => (
  <div>
    <TextField
      hintText="index.js"
      floatingLabelText="Entry"
      floatingLabelFixed={true}
    />
    <TextField
      hintText="build.js"
      floatingLabelText="Output"
      floatingLabelFixed={true}
    />
    <ConnectedConfigBuilder/>
    <ConnectedPackages/>
    <WebpackConfig/>
  </div>
)

App.propTypes = {}

export default App
