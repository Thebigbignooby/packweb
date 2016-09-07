export const initConfig = {
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
