const path = require('path');
const base = require('./webpack.base');
const { merge } = require('webpack-merge');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports= merge(base, {
  entry: {
    getQueryParams: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    filename: '[name].[contenthash].min.js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new CleanWebpackPlugin() // 自动清除output定义的path下的内容
  ]
})
  