var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname+"/src",
  devtool: "inline-sourcemap",
  entry: "./js/script.js",
  output: {
    path: __dirname + "/build/",
    filename: "bundle.min.js"
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
  plugins: debug ? [] : [
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
