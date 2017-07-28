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
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        })
    ]
};

module.exports = webpackConfig;