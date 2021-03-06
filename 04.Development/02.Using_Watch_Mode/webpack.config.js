const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')

module.exports = {
  mode: 'development',
  entry: resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'js/[name].js',
    path: resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'public/index.html')
    }),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    })
  ]
}