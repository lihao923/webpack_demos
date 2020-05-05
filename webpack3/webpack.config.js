let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let Webpack = require('webpack');
// let Happypack = require('happypack'); // happypack模块可以实现多线程来打包，进程

module.exports = {
    optimization: {
        splitChunks: { // 分割代码块
            cacheGroups: { // 缓存组
                common: { // 公共的模块
                    chunks: 'initial',
                    minSize: 0,
                    minChunks: 2
                },
                vendor: {
                    priority: 1,
                    test: /node_modules/, // 把你抽离出来
                    chunks: 'initial',
                    minSize: 0,
                    minChunks: 2
                }
            }
        }
    },
    mode: 'production',
    entry: {
        index: './src/index.js',
        test: './src/test.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        noParse: /jquery/, // 不去解析jquery中的依赖关系
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve('src'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new Webpack.IgnorePlugin(/\.\/locale/, /moment/)
    ],
    devServer: {
        port: 3000,
        contentBase: './dist'
    }
}