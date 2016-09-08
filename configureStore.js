import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import packweb from './reducers'

const configureStore = () => {
  const middlewares = []

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  return createStore(
    packweb,
    applyMiddleware(...middlewares)
  )
}

export default configureStore
