import expect from 'expect'
import deepFreeze from 'deep-freeze'


import * as actions from '../../actions'
import packweb from '../../reducers'

export const toggleItemTest = () => {
  let stateBefore = undefined
  let action = actions.toggleItem('es6')

  let stateAfter = {
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

  // deepFreeze(stateBefore)
  deepFreeze(action)

  expect(
    packweb(stateBefore, action)
  ).toEqual(stateAfter)
}
