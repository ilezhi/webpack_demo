const path = require('path');
const webpack = require('webpack');

const webpackConfig = {
    entry: {
        main: './src/main.js',
        app: './src/app.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        port: 8000,
        publicPath: '/',
        hot: true
    },
    module: {                           // 添加module配置项
        rules: [
            {
                test: /\.css$/,         // 匹配文件正则
                use: [
                    'style-loader',         // 将css添加到生成的style标签并添加到页面head标签内
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        new webpack.HotModuleReplacementPlugin()        // enable HMR
    ]
};

module.exports = webpackConfig;