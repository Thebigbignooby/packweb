import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

import TextField from 'material-ui/TextField';

import ConfigBuilder from './ConfigBuilder'
import ConnectedPackages from './ConnectedComponents/ConnectedPackages'
import ConnectedWebpackConfig from './ConnectedComponents/ConnectedWebpackConfig'

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
    <ConfigBuilder/>
    <ConnectedPackages/>
    <ConnectedWebpackConfig/>
  </div>
)

App.propTypes = {}

export default App
