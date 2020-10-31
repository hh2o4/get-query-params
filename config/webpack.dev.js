const path = require('path');
const base = require('./webpack.base');
const { merge } = require('webpack-merge');
const portfinder = require('portfinder');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = merge(base, {
  entry: {
    app: path.resolve(__dirname, '../demo/index.js')
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../demo')
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: '查询字符串获取功能测试页面',
      template: path.resolve(__dirname, '../demo/template.html'),
      favicon: path.resolve(__dirname, '../demo/favicon.jpg')
    })
  ],
  devServer: {
    
  }
})

module.exports = new Promise((resolve, reject) => {
  portfinder.getPort({ port: 8080, stopPort: 9000 }, (err, port) => {
    if (port) {
      config.devServer.port = port;
      resolve(config)
    } else {
      config.devServer.port = 8080;
      reject(config)
    }
  })
})