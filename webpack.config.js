const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const browserConfig = {
  entry: './src/client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  watchOptions: {
    aggregateTimeout: 300,
    ignored: /node_modules/,
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader' },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'true',
    }),
  ],
};

const serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  watchOptions: {
    aggregateTimeout: 300,
    ignored: /node_modules/,
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader' },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'false',
    }),
  ],
};

module.exports = [serverConfig, browserConfig];
