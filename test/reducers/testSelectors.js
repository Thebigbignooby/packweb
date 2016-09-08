import expect from 'expect'
import deepFreeze from 'deep-freeze'

import * as webpackOptions from '../../knowledge-base/webpackConfigOptions'
import { getPackagesBySelectedOptions } from '../../reducers'

export const getPackagesBySelectedOptionsTest = () => {
  let selectedOptions = ['es6', 'react']
  let packagesByOption = webpackOptions.initPackagesByOption
  let state = {
    selectedOptions,
    packagesByOption
  }

  let expectedPackages = [
    'babel-core',
    'babel-preset-es2015',
    'babel-loader',
    'babel-preset-react'
  ]

  deepFreeze(state)

  expect(
    getPackagesBySelectedOptions(state)
  ).toEqual(expectedPackages)
}
