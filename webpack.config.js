const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

const webpack = require('webpack');

const noEnvVar = name => {
  throw `${name} environment variable is undefined. Please provide it to fix this error.`;
};

const DefinePluginConfig = new webpack.DefinePlugin({
  COGNITO_POOL_ID: JSON.stringify(process.env.COGNITO_POOL_ID || noEnvVar('COGNITO_POOL_ID')),
  COGNITO_APP_CLIENT_ID: JSON.stringify(process.env.COGNITO_APP_CLIENT_ID || noEnvVar('COGNITO_APP_CLIENT_ID'))
});

const BabelLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: "babel-loader"
};

const CSSLoader = {
  test: /\.css$/,
  loader: "style-loader!css-loader?modules!postcss-loader"
};

const JSONLoader = {
  test: /\.json$/,
  loader: 'json'
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
    loaders: [BabelLoader, CSSLoader, JSONLoader]
  },
  plugins: [HtmlWebpackPluginConfig, DefinePluginConfig]
};