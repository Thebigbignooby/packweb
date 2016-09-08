import expect from 'expect'
import deepFreeze from 'deep-freeze'

import * as webpackOptions from '../../knowledge-base/webpackConfigOptions'

import * as actions from '../../actions'
import selectedOptions from '../../reducers/selectedOptions'

export const addOptionTest = () => {
  let stateBefore = []
  let action = actions.toggleOption('es6')

  let stateAfter = ['es6']

  deepFreeze(stateBefore)
  deepFreeze(action)

  expect(
    selectedOptions(stateBefore, action)
  ).toEqual(stateAfter)
}

export const removeOptionTest = () => {
  let stateBefore = ['es6']
  let action = actions.toggleOption('es6')

  let stateAfter = []

  deepFreeze(stateBefore)
  deepFreeze(action)

  expect(
    selectedOptions(stateBefore, action)
  ).toEqual(stateAfter)
}
