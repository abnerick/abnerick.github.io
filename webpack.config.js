var path = require('path');
var bootstrapEntryPoints = require('./webpack.bootstrap.config')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack')

var isProd = process.env.NODE_ENV === 'production';
var cssDev = ['style-loader', 'css-loader', 'sass-loader'];

var boostrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;

module.exports = {
  entry: {
    app: './src/app.js',
    boostrap: boostrapConfig
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'blog')
  },
  module: {
     rules: [
       {
         test: /\.scss$/,
         use: ExtractTextPlugin.extract({
           fallback: 'style-loader',
           loader: ['css-loader','sass-loader'],
           publicPath: '/'
         })
       },
       { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, use: 'imports-loader?jQuery=jquery,$=jquery' },
       { test: /\.(woff2?|svg|ttf|eot)$/, use: 'url-loader?name=fonts/[name].[ext]' },       
       { test: /\.(mp3)$/, use:  ['file-loader?name=audio/[name].[ext]'] }
     ]
   },
   plugins:[
     new HtmlWebpackPlugin({
       title: "Ingles",
       /*minify:{
         collapseWhitespace: true
       },*/
       // hash: true,
       template: "./src/index.ejs"
     }),
     new ExtractTextPlugin({
       filename: 'css/[name].css',
       disable: false,
       allChunks: true
     }),
     new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
      })
  ],
   devServer: {
      // hot: true, // Tell the dev-server we're using HMR
      contentBase: path.join(__dirname, "./blog"),
      compress: true,
      port: 9000,
      stats: "errors-only"
  }
};
