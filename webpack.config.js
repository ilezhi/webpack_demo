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
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        new webpack.HotModuleReplacementPlugin()        // enable HMR
    ]
};

module.exports = webpackConfig;