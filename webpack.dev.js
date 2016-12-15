var webpack = require('webpack');
var baseConfig = require('./webpack.base');

var devConfig = Object.create(baseConfig);
devConfig.output.filename = 'ScrollLazyload.js';
(devConfig.plugins || (devConfig.plugins = [])).push(
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.DefinePlugin({ NODE_ENV: JSON.stringify('development') })
);

module.exports = devConfig;
