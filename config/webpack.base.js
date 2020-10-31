module.exports= {
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        },
      }
    }],
  },
  performance: {
    maxEntrypointSize: 1000000,
    maxAssetSize: 1000000
  }
}