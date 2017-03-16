var debug = "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname+"/src",
  devtool: "inline-sourcemap",
  entry: "./js/index.js",
  output: {
    path: __dirname + "/build/",
    filename: "build/bundle.min.js"
  },
  module: {
      loaders: [
          {
              test: /\.js$/,
              loader: 'babel-loader',
              query: {
                  presets: ['es2015']
              }
          }
      ]
  },
  stats: {
      colors: true
    },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
