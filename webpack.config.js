var path = require('path');
var webpack = require("webpack");

require('es6-promise').polyfill();

var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || false)),
});

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: __dirname + "/js",
        filename: 'bundle.js'
    },
    plugins: [definePlugin],
    module: {
        loaders: [
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel',
              query: {
                presets: ['react', 'es2015'],
                plugins: ['transform-runtime']
              }
            },
            {
              test: /\.js?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel',
              query: {
                presets: ['es2015'],
                plugins: ['transform-runtime']
              }
            },
            {
              test: /\.html$/,
              loader: "html-loader"
            },
            {
              test: /\.css$/,
              loader: "style!css"
            },
            {
              test: /\.scss$/,
              loaders: ["style", "css", "sass"]
            },
            {
              test: /\.md$/,
              loader: "html!markdown"
            },
            {
              test: /\.json$/,
              loader: "json"
            }
        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./styles")]
    },
    node: {
      fs: "empty"
    }
};
