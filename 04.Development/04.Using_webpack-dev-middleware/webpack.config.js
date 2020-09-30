const { resolve } = require('path')

module.exports = {
  mode: 'development',
  entry: resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'js/[name].js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  }
}