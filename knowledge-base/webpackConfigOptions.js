export const allPossibleOptions = [
  // 'devServer',
  'es6',
  'react',
  'sass'
]

export const initConfig = {
  entry: 'index.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  }
}

export const initPackagesByOption = {
  // devServer: ['webpack-dev-server'],
  es6: ['babel-core', 'babel-preset-es2015', 'babel-loader'],
  react: ['babel-core', 'babel-preset-react', 'babel-loader'],
  sass: ['css-loader', 'style-loader', 'sass-loader', 'node-sass']
}

// export const initImportsByPlugin = {
//
// }

export const initConfigByOption = {
  // 'devServer': {
  //   devServer: {
  //     inline: true,
  //     hot: true
  //   }
  // },
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
  sass: {
    module: {
      loaders: [{
        loaders: ['style', 'css', 'sass'],
        test: `/\.(css|scss)$/`,
        // exclude: `/node_modules/`,
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
