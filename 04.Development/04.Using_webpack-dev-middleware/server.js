const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const express = require('express')
const config  = require('./webpack.config')

const app = express()
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.listen(3000, () => {
  console.log('server listening  on port 3000...')
})