const path = require('path');
const base = require('./webpack.base');
const { merge } = require('webpack-merge');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports= merge(base, {
  entry: {
    getQueryParams: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist'),
    library: 'getQueryParams',
    libraryTarget: 'umd',
    // targetExport: 'default'
  },
  plugins: [
    new CleanWebpackPlugin() // 自动清除output定义的path下的内容
  ]
})
  