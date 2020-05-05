let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let webpack = require('webpack');

// 1. cleanWebpackPlugin
// 2. copyWebpackPlugin
// 3. bannerPlugin
module.exports = {
    // 多入口
    mode: 'production',
    entry: {
        home: './src/index.js'
    },

    // 增加映射文件，可以帮我们调试源码
    // devtool: 'source-map', // 1)源码映射，会单独生成一个sourcemap文件，出错了会标识当前报错的列和行(大，全)
    // devtool: 'eval-source-map', // 2)不会产生独立的文件，但是可以显示行和列
    // devtool: 'cheap-module-source-map', // 3)不会产生列，但是是一个单独的映射文件， 产生后可以保留起来
    devtool: 'cheap-module-eval-source-map', // 4)不会生成文件，集成在打包后的文件中，不会产生列
    // watch: true,
    // watchOptions: { // 监控选项
    //     poll: 1000, // 每秒问我1000次
    //     aggregateTimeout: 500, // 防抖
    //     ignored: /node_modules/ // 设置忽略的文件夹
    // },
    output: {
        filename: '[name].[hash:5].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['./dist']
        }),
        new CopyWebpackPlugin([
            { from : 'doc', to: './'}
        ]),
        new webpack.BannerPlugin(`
            Author: lihao, 
            Email: lihao923@163.com
        `),
        new webpack.DefinePlugin({
            DEV: JSON.stringify('production'),
            FLAG: 'true',
            EXPRESSION: ' 1 + 1'
        })
    ],
    resolve: { // 解析 第三方包 common
        modules: [path.resolve('node_modules'), path.resolve('dist')],
        // mainFields: ['style', 'main'],
        // mainFiles: [], // 入口文件的名字 index.js
        // alias: {// 别名
        //     bootstrap: 'bootstrap/dist/css/bootstrap.css'
        // }
        extensions: ['.js', '.css', '.json', '.vue']
    },
    devServer: {
        port: 9527,
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:9528/api',
        //         pathRewrite: {'^/api' : ''}
        //     }
        // }

        // before(app) { // 提供的方法 钩子（前端只想单纯的模拟数据）
        //     app.get('/user', (req, res) => {
        //         res.json({name: 'lihao-before!'})
        //     })
        // }

        // 有服务端，不用用代理来处理，能不能在服务端中启动webpack 端口用服务端端口
    }
}