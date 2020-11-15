const path = require('path');
const HTMLPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'scripts.js'
    },
    devServer: {
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg)$/,
                loader: 'url-loader'
            },
            {
            test:/.(s*)css$/,
            use: [
                miniCss.loader,
                'css-loader?url=false',
                'sass-loader',
            ]
        }]
    },
    plugins: [
        new HTMLPlugin({template: './src/index.html',}),
        new CleanWebpackPlugin(),
        new miniCss({
            filename: './assets/style.css',
        }),
    ],
};