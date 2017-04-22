const path = require('path');



const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({template: './public/index.html', filename: 'index.html', inject: 'body'})

module.exports = {

  entry: './client/index.js',

  output: {

    path: path.resolve('dist'),

    filename: 'index_bundle.js'

  },

  module: {

    loaders: [

      {

        test: /\.js$/,

        loader: 'babel-loader',

        exclude: /node_modules/

      }, {

        test: /\.jsx$/,

        loader: 'babel-loader',

        exclude: /node_modules/

      }, {

        test: /\.scss$/,

        loaders: ['style-loader', 'css-loader', 'sass-loader']

      }, {

        test: /\.(otf|ttf|woff|jpeg|jpg|png|gif|svg)$/,

        use: [

          {

            loader: "file-loader",

            options: {

              outputPath: path.join("public/Fonts", "/"),

              publicPath: "public/Fonts/",

              name: '[name]--[hash:base64:5].[ext]'

            }

          }

        ]

      }



    ]

  },

  plugins: [HtmlWebpackPluginConfig]

}
