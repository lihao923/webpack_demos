let path = require('path');
let DonePlugin = require('./plugins/DonePlugin');
let AsyncPlugin = require('./plugins/AsyncPlugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let FileListPlugin = require('./plugins/FileListPlugin');
let MiniCSSExtractPlugin = require('mini-css-extract-plugin');
// let InlineSourcePlugin = require('./plugins/InlineSourcePlugin');
let UploadPlugin = require('./plugins/UploadPlugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new DonePlugin(),
        new AsyncPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new FileListPlugin({
            filename: 'list.md'
        }),
        new MiniCSSExtractPlugin({
            filename: 'main.css'
        }),
        // new InlineSourcePlugin({
        //     match: /\.(js|css)/
        // })
        new UploadPlugin({
            bucket: 'jwstatic',
            domain: 'img.fullstackjavascript.cn',
            accessKEY: 'dafdafdaddfdfasdfasdfasdfasd',
            secretKey: 'dafasdfafadfadfadfasdsdfafdafdaf'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCSSExtractPlugin.loader, 'css-loader']
            }
        ]
    }
};



