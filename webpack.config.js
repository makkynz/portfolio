var path = require('path');
 
var config = {
  context: path.join(__dirname, 'src'),
  entry: [
    'whatwg-fetch',
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot','babel'],
      },
    ],
  },
  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  resolve: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  devServer: {
    contentBase: "./www",
    hot: true,
    historyApiFallback: true
  },
  
};
module.exports = config;