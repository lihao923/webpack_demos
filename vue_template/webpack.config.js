const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const env = process.env.NODE_ENV == 'development' ? 'development' : 'production';

module.exports = {
  mode: env,
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    // 设置别名
    alias: {
      '@': path.resolve('src'), // 这样配置后@可以指向 src 目录
      '@assets': path.resolve('./src/assets')// 这样配置后@可以指向 src 目录
    }
  },
  devtool: 'source-map',
  stats: 'errors-only',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              injectType: 'singletonStyleTag'
              // injectType: 'linkTag'
            },
          },
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(__dirname, 'src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10*1024 // 10k以下处理成base64
          }
        }
      },
      {
        test: /\.(png|jpe?g|jpeg|gif|svg)$/,
        enforce: 'pre',
        loader: 'image-webpack-loader'
      }
    ]
  },
  devServer: {
    host: 'localhost',
    port: '8899',
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: "index.html",
      url: 'BASE_URL'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.HotModuleReplacementPlugin() //热加载插件
  ]
};










