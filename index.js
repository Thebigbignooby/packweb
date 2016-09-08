import React from 'react'
import { render } from 'react-dom'

import Root from './components/Root'

import configureStore from './configureStore'
const store = configureStore()

console.log(store.getState())

render(
  <Root store={store} />,
  document.getElementById('app')
)

console.log('index . js loader!')
