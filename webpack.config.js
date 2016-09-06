module.exports = {
  entry: './index.js',
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
      }
    ]
  },
  devServer: {
    inline: true,
    port: 3080,
  },
}
