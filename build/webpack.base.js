var path = require('path');
var webpack = require('webpack');
var config = require('../config/config');

var paths = config.utils_paths;
var filename = config.cache ? 'js/[name].[chunkhash:5].js' : 'js/[name].js';
var chunkFilename = config.cache ? 'js/[name].[chunkhash:5].js' : 'js/[name].js';

var baseConfig = {
  entry: {
    main: paths.src('main.js'),
    app: paths.src('app.js'),
    vendor: config.vendor_dependencies
  },
  output: {
    filename: filename,
    path: paths.dist(),
    publicPath: '/',
    chunkFilename: chunkFilename
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.scss'],
    alias: config.utils_aliases
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          query: {
            name: 'images/[name].[ext]'
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          query: {
            name: 'fonts/[name].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
  ]
};

module.exports = baseConfig;