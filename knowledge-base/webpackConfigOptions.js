import escapeRegExp from 'lodash.escaperegexp'

export const allPossibleOptions = [
  'devServer',
  'es6',
  'react',
]

export const initConfig = {
  entry: 'someEntry',
  output: {
    path: 'somepath',
    filename: 'somefilename'
  }
}

export const initPackagesByOption = {
  devServer: ['webpack-dev-server'],
  es6: ['babel-core', 'babel-preset-es2015', 'babel-loader'],
  react: ['babel-core', 'babel-preset-react', 'babel-loader']
}

export const initConfigByOption = {
  'devServer': {
    devServer: {
      inline: true,
      hot: true
    }
  },
  es6: {
    module: {
      loaders: [{
        loader: 'babel',
        test: `/\.js$/`,
        exclude: `/node_modules/`,
      }]
    }
  },
  react: {
    module: {
      loaders: [{
        loader: 'babel',
        test: `/\.js$/`,
        exclude: `/node_modules/`,
      }]
    }
  },
}

export const configOrder = [
  'imports',
  'context',
  'entry',
  'output',
  'module',
  'plugins',
  'devServer'
]
