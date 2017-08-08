var webpack = require('webpack');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var baseConfig = require('./webpack.base');
var config = require('../config/config');

var devConfig = merge(baseConfig, {
  devtool: 'inline-source-map',               // 用于定位错误代码具体在哪个文件
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    hot: true,
    port: config.webpack_port,
    contentBase: './public',
    // historyApiFallback: true,                // 启用historyAPI
    // proxy: {                                 // 启用代理，用于前后端分离开发
    //   '/api': {
    //     target: 'http://localhost:3000',     // 后台
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '/'                      // 路径重置
    //     }
    //   }
    // }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),        // enable HMR
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    })
  ]
});

module.exports = devConfig;