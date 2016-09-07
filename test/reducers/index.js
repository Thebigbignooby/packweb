import expect from 'expect'
import deepFreeze from 'deep-freeze'

import * as webpackOptions from '../../knowledge-base/webpackConfigOptions'

import * as actions from '../../actions'
import packweb from '../../reducers'

export const addOptionTest = () => {
  let stateBefore = webpackOptions.initConfig
  let action = actions.toggleOption('es6')

  let stateAfter = {
    activeOptions: ['es6'],
    packages: [
      'webpack',
      'babel-core',
      'babel-preset-es2015',
      'babel-loader'
    ],
    webpackConfig: {
      entry: 'someEntry',
      output: {
        path: 'somepath',
        filename: 'somefilename'
      },
      module: {
        loaders: [{
          loader: 'babel',
          test: /\.js$/,
          exclude: /node_modules/,
        }]
      }
    }
  }

  deepFreeze(stateBefore)
  deepFreeze(action)

  expect(
    packweb(stateBefore, action)
  ).toEqual(stateAfter)
}

export const removeOptionTest = () => {
  let stateBefore = {
    activeOptions: ['es6'],
    packages: [
      'webpack',
      'babel-core',
      'babel-preset-es2015',
      'babel-loader'
    ],
    webpackConfig: {
      entry: 'someEntry',
      output: {
        path: 'somepath',
        filename: 'somefilename'
      },
      module: {
        loaders: [{
          loader: 'babel',
          test: /\.js$/,
          exclude: /node_modules/,
        }]
      }
    }
  }
  let action = actions.toggleOption('es6')

  let stateAfter = webpackOptions.initConfig

  deepFreeze(stateBefore)
  deepFreeze(action)

  expect(
    packweb(stateBefore, action)
  ).toEqual(stateAfter)
}
