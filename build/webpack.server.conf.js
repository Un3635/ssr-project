const webpack = require('webpack')
const merge = require('webpack-merge')
const VueSSRPlugin = require('vue-ssr-webpack-plugin')
const base = require('./webpack.base.conf')

module.exports = merge(base, {
  target: 'node', // 跑在node 上
  devtool: 'source-map',
  entry: './src/entry-server.js',
  output: {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },
  // externals: [webpackNodeExternals()],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env'),
      'process.env.VUE_ENV': '"server"'
    }),
    new VueSSRPlugin()
  ]
})