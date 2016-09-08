import expect from 'expect'

import * as actionTests from './actions'
// import * as reducerTests from './reducers'
import reducerTests from './reducers'

describe('ACTIONS', () => {
  it('should return a correct TOGGLE_OPTION action', actionTests.toggleOptionTest)
})

describe('REDUCERS', () => {
  reducerTests()
  // it('should add an option', reducerTests.addOptionTest)
  // it('should remove an option', reducerTests.removeOptionTest)
})
