var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders()
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),

    // https://github.com/ampedandwired/html-webpack-plugin
    //HtmlWebpackPlugin，模板生成相关的配置，每个对于一个页面的配置，有几个写几个
    new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
      filename: 'index.html', //生成的html存放路径，相对于path
      template: 'index.html', //html模板路径
      hash: true, //为静态资源生成hash值
      chunks: ['app'],//需要引入的chunk，不配置就会引入所有页面的资源      
      inject: true //js插入的位置，true/'head'/'body'/false
    }),
    new HtmlWebpackPlugin({
      filename: 'todo.html', //生成的html存放路径，相对于path
      template: 'todo.html', //html模板路径
      hash: true, //为静态资源生成hash值
      chunks: ['todo'],//需要引入的chunk，不配置就会引入所有页面的资源      
      inject: true //js插入的位置，true/'head'/'body'/false
    })    
  ]
})
