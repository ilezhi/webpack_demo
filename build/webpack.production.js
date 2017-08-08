var webpack = require('webpack');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpckPlugin = require('clean-webpack-plugin');
var baseConfig = require('./webpack.base');
var config = require('../config/config');

var prodConfig = merge(baseConfig, {
  devtool: 'source-map',                // 生成map文件，定位错误位置
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract([{
          loader: 'css-loader',
          options: {
            minimize: true,
            sourceMap: true
          }
        }, 'sass-loader'])
      }
    ]
  },
  plugins: [
    // 将NODE_ENV替换为'production'
    new webpack.DefinePlugin(config.globals),   
    // 输出index.html
    new HtmlWebpackPlugin({
      filename: '../views/index.html',
      template: 'index.html',
      minify: {
        removeCommments: true,
        collapseWhiteSpace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    }),
    // 打包css文件
    new ExtractTextPlugin('styles/[name].[contenthash:5].css'),
    // 压缩js
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      },
      sourceMap: true
    }),
    // 构建前删除dist目录
    new CleanWebpckPlugin([config.dir_dist], {
      root: config.path_project                 // 定义根路径
    })
  ]
});

module.exports = prodConfig;