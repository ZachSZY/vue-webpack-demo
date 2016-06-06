var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')
var webpack = require('webpack')

module.exports = {
  entry: {  //配置入口文件，有几个写几个
    main: './src/scripts/main.js',
    todo: './src/scripts/todo.js'
  },
  output: {
    path: config.build.assetsRoot,  //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
    publicPath: config.build.assetsPublicPath, //模板、样式、脚本、图片等资源对应的server上的路径
    filename: '[name].js' //每个页面对应的主js的生成配置
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'scripts': path.resolve(__dirname, '../src/scripts'),
      'styles': path.resolve(__dirname, '../src/styles')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: utils.cssLoaders()
  },
  plugins: [
    new webpack.ProvidePlugin({ //加载jq
        $: 'jquery'
    })
  ]
}
