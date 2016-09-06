export const initConfig = {
  packages: ['webpack'],
  webpackConfig: {
    entry: 'someEntry',
    output: {
      path: 'somepath',
      filename: 'somefilename'
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
