const { merge } = require('webpack-merge');
const common = require('./webpack.common');
// const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    publicPath: '/Continuous-Deployment/',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      '...',
    ],
  },
});
