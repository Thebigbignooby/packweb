import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

injectTapEventPlugin()

import App from './App'

const Root = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <App/>
    </MuiThemeProvider>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
