var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'src', 'app.jsx'),

  output: {
    path: path.join(__dirname, 'dist')
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
