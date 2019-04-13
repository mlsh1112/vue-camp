var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // entry: './app/index.js',
  // output: './dist/bundle.js',
  // loader: 'css-loader',
  mode: 'production',
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
          loader: MiniCssExtractPlugin.loader
        },
        "css-loader"
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
}