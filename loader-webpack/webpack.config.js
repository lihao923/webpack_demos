let path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolveLoader: {
        // 别名
        // alias: {
        //     loader1: path.resolve(__dirname, 'loaders', 'loader1.js')
        // }
        modules: ['node_modules', path.resolve(__dirname, 'loaders')]
    },
    devtool: 'source-map',
    watch: true,
    module: {
        // loader的分类， pre在前面的， post在后面， normal在中间
        // loader的顺序 pre -> normal -> inline -> post
        // rules: [ // loader顺序 从右向左，从下到上
            // {
            //     test: /\.js$/,
            //     use: ['loader3', 'loader2', 'loader1']
            // }
            // {
            //     test: /\.js$/,
            //     use: {
            //        loader: 'loader1',
            //     },
            //     enforce: 'pre'
            // },
            // {
            //     test: /\.js$/,
            //     use: {
            //         loader: 'loader2'
            //     }
            // },
            // {
            //     test: /\.js$/,
            //     use: {
            //         loader: 'loader3'
            //     },
            //     enforce: 'post'
            // }
        // ]
        rules: [
            // {
            //     test: /\.js$/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env']
            //         }
            //     }
            // }
            {
                test: /\.js$/,
                use: { /**lihao**/
                    loader: 'banner-loader',
                    options: {
                        text: 'lihao923',
                        filename: path.resolve(__dirname, 'banner.js')
                    }
                }
            },
            {
                test: /\.png$/,
                // 目的就是根据图片生成一个md5，发射到dist目录下，file-loader还会返回当前的图片路径
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 20*1024
                    }
                }
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    }
};