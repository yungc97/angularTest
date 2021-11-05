'use strict'; 

const MiniCssExtractWebpackPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const config = { 
  module: {
    rules: [
       /* CSS 로더 */
       {
        test: /\.css$/,
        use: [MiniCssExtractWebpackPlugin.loader, {
          loader: 'css-loader',
          options: {
            url: false,
            sourceMap: false
          }
        }]
      },
      /* html 로더  */
      {
        test: /.html$/,
        include: /views/,
        use: 'html-loader'
      }
    ]
  },

  mode: 'development',
  entry: path.resolve(__dirname, './app/index.ts'), 
  output: { 
    path: path.resolve(__dirname, 'dist'),
    filename: './scripts/[name].js',
  }, 
  devServer: {
      host : '127.0.0.1',
      compress: true,
      hot : true,
      port: 9000,
      open : true
  },
  
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
      template: './app/index.html',
    }),
    /* css package */
    new MiniCssExtractWebpackPlugin({
      filename: './styles/[name].css',
      chunkFilename: '[id].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "app/views",
          to: "views",
        },
        {
          from: "app/json",
          to: "json"
        }
      ]
    })
  ]
};

module.exports = config;
