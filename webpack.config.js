var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const VENDORS = [
  'jquery', 'lodash'
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDORS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
      {
        use: ['style-loader', 'css-loader', 'sass-loader'],
        test: /\.scss$/
      },
      {
        use : 'file-loader',
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/
      },
      {
        use: "file-loader",
        test: /\.(jpe?g|png|gif|svg|mp4)$/
      }
    ]
  },
  resolve: {
    alias: {
      jquery: "jquery/src/jquery"
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new CopyWebpackPlugin([
        { from: './style', to: './style' },
        { from: './images', to: './images'},
        { from: './fonts', to: './fonts'},
    ], {
        ignore: ['*.scss']
    })
  ]
};
