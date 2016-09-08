import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import reducer from './reducers'

const configureStore = () => {
  const middlewares = []

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  return createStore(
    reducer,
    applyMiddleware(...middlewares)
  )
}

export default configureStore
