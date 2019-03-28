module.exports = {
  entry: './src/App.jsx',
  output: {
      path: __dirname + '/dist',
      filename: 'bundle.js',
      publicPath: '/dist/'
  },
  devtool: 'inline-soruce-map',
  module: {
      rules: [
          {
              test: /\.js(x?)$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
          }
      ]
  },
  devServer: {
      historyApiFallback: {
          index: 'index.html'
      },
      port: '8080'
  }
}