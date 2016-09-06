import expect from 'expect'

import * as actionTests from './actions'
import * as reducerTests from './reducers'

describe('ACTIONS', () => {
  it('should return a correct TOGGLE_ITEM action', actionTests.toggleItemTest)
})

describe('REDUCERS', () => {
  it('should toggle an item', reducerTests.toggleItemTest)
})
