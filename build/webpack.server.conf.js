const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const VueSSRPlugin = require('vue-server-renderer/server-plugin')
// const webpackNodeExternals = require('webpack-node-externals')
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
      'process.env': require('../config/dev.env')
    }),
    new VueSSRPlugin()
  ]
})