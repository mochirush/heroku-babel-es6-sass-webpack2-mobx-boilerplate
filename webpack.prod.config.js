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
                    loader: "css-loader" // translates CSS into CommonJS 
                }, {
                    loader: "sass-loader"
                    // compiles Sass to CSS 
                }]
            }
        ]
    },
    performance: {
        hints: false
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin('./public/main.css')
    ],
};
