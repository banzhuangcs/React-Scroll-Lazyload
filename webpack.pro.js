var webpack = require('webpack');
var baseConfig = require('./webpack.base');

var proConfig = Object.create(baseConfig);
proConfig.output.filename = 'ScrollLazyload.min.js';
(proConfig.plugins || (proConfig.plugins = [])).push(
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.DefinePlugin({ NODE_ENV: JSON.stringify('production') })
);
