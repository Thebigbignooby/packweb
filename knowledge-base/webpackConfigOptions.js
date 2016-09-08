export const allPossibleOptions = [
  'devServer',
  'es6',
  'react',
]

export const initConfig = {
  allPossibleOptions,
  activeOptions: [],
  packages: ['webpack'],
  webpackConfig: {
    entry: 'someEntry',
    output: {
      path: 'somepath',
      filename: 'somefilename'
    }
  }
}

export const initPackagesByOption = {
  'dev-server': ['webpack-dev-server'],
  es6: ['babel-core', 'babel-preset-es2015', 'babel-loader'],
  react: ['babel-core', 'babel-preset-react', 'babel-loader']
}

export const configByOption = {
  'dev-server': {
    devServer: {
      inline: true,
      hot: true
    }
  },
  es6: {
    module: {
      loaders: [{
        loader: 'babel',
        test: /\.js$/,
        exclude: /node_modules/,
      }]
    }
  },
  react: {
    module: {
      loaders: [{
        loader: 'babel',
        test: /\.js$/,
        exclude: /node_modules/,
      }]
    }
  },
}

export const devServer = {
  packages: ['webpack-dev-server'],
  webpackConfig: {
    devServer: {
      inline: true,
      hot: true
    }
  }
}

export const es6 = {
  packages: ['babel-core', 'babel-preset-es2015', 'babel-loader'],
  webpackConfig: {
    module: {
      loaders: [{
        loader: 'babel',
        test: /\.js$/,
        exclude: /node_modules/,
      }]
    }
  }
}

export const react = {
  packages: ['babel-core', 'babel-preset-react', 'babel-loader'],
  webpackConfig: {
    module: {
      loaders: [{
        loader: 'babel',
        test: /\.js$/,
        exclude: /node_modules/,
      }]
    }
  }
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
