const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    bundle: [
      "react-hot-loader/patch",
      "./src/index.js"
    ]
  },
  output: {
    filename: "bundle.js",
    publicPath: "/public/",
    path: path.join(__dirname, 'public') // builds out to /public
  },
  resolve: {
    extensions: ['.scss', '.css', '.js', '.json', '.webpack.js', '.web.js', '.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
          use: [{
            loader: "style-loader" // creates style nodes from JS strings 
          }, {
              loader: "css-loader", options: {
                sourceMap: true
              } // translates CSS into CommonJS 
          }, {
              loader: "sass-loader", options: {
                sourceMap: true
              } // compiles Sass to CSS 
        }]
      }
    ]
  },
  performance: {
    hints: false
  },
  devServer: {
    contentBase: path.resolve("./public/"),
    publicPath: "http://localhost:8080/", // full URL is necessary for Hot Module Replacement if additional path will be added.
    quiet: false,
    hot: true,
    historyApiFallback: true,
    inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    // new webpack.LoaderOptionsPlugin({
    //   debug: true,
    //   postcss: () => {
    //     return [
    //       /* eslint-disable global-require */
    //       require('postcss-cssnext')({
    //         features: {
    //           customProperties: {
    //             variables: reactToolboxVariables,
    //           },
    //         },
    //       }),
    //       require('postcss-modules-values'),
    //       /* eslint-enable global-require */
    //     ];
    //   }
    // }),
    new ExtractTextPlugin('./public/main.css')
  ],
};
