// const path = require('path');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

// const webpackConfig = {
//     entry: {
//         main: './src/main.js',
//         app: './src/app.js'
//     },
//     output: {
//         filename: 'js/[name].[hash:5].js',
//         path: path.resolve(__dirname, 'dist'),
//         publicPath: '/',                                    // index.html自动替换文件根路径
//         chunkFilename: 'chunk/[name].[chunkhash:5].chunk.js'      // 按需加载生成的chunkfile文件名
//     },
//     devServer: {
//         port: 8000,
//         publicPath: '/',
//         hot: true
//     },
//     resolve: {
//         extensions: ['.js', '.json', '.css', '.scss'],       // 定义哪些文件再引入时不需要添加文件后缀，默认为.js,.json
//         alias: {
//             css: path.resolve(__dirname, 'src/assets/css'),        // 给路径起别名，简化引用路径长度
//             tooltip: path.resolve(__dirname, 'src/components/common/tooltip.js'),     // 给文件起别名
//         }
//     },
//     module: {                           // 添加module配置项
//         rules: [
//             {
//                 test: /\.js$/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ['env']
//                     }
//                 },
//                 include: [path.resolve(__dirname, 'src')]           // 哪些文件使用babel-loader编译
//             },
//             {
//                 test: /\.(css|scss)$/,         // 匹配文件正则
//                 use: ExtractTextPlugin.extract({
//                     use: ['css-loader', 'sass-loader'],
//                     fallback: 'style-loader'
//                 })
//             },
//             {
//                 test: /\.(png|svg|jpg|gif)$/,
//                 use: {
//                     loader: 'file-loader',
//                     query: {
//                         name: 'images/[name].[ext]'
//                     }
//                 }
//             },
//             {
//                 test: /\.(woff|woff2|eot|ttf|otf)$/,
//                 use: {
//                     loader: 'file-loader',
//                     query: {
//                         name: 'fonts/[name].[ext]'
//                     }
//                 }
//             }
//         ]
//     },
//     plugins: [
//         new webpack.optimize.CommonsChunkPlugin({
//             names: ['common', 'manifest']
//         }),
//         new webpack.HotModuleReplacementPlugin(),        // enable HMR
//         new HtmlWebpackPlugin({
//             title: 'webpack demo',
//             filename: 'index.html',        // 可以指定目录
//             template: 'index.html'
//         }),
//         new CleanWebpackPlugin(['dist']),
//         new ExtractTextPlugin({
//             filename: getPath => {
//                 return getPath('/dist/site.[contenthash:5].css').replace('/dist', 'css')
//             }
//         })
//     ]
// };

// module.exports = webpackConfig;

var config = require('./config/config');

module.exports = require(`./build/webpack.${config.env}`);