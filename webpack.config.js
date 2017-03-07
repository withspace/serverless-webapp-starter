const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

const BabelLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: "babel-loader"
};

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [BabelLoader]
  },
  plugins: [HtmlWebpackPluginConfig]
};