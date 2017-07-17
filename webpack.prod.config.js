const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const dir_styles = path.resolve(__dirname, './src/styles');

module.exports = {
    entry: {
        bundle: [
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
                test: dir_styles,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?sourceMap!sass-loader?sourceMap' })
            }
        ]
    },
    performance: {
        hints: false
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin("main.css")
    ],
};
