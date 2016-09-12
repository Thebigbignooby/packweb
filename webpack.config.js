const webpack = require('webpack')

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    './index.js'
  ],
  output: {
    path: './build',
    publicPath: 'build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        // query: {
        //   // presets: [
        //   //   'es2015',
        //   //   // 'react',
        //   // ],
        //   // plugins: ['transform-object-rest-spread']
        // }
      },
      {
        test:   /\.s?css/,
        loaders: ['style', 'css', 'sass'],
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    inline: true,
    // hot: true,
    port: 3080,
  },
}
