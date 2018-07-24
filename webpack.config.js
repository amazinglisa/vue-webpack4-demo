const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成 html 模板
const CleanWebpackPlugin = require('clean-webpack-plugin') // 清除 dist 文件夹
const VueLoaderPlugin = require('vue-loader/lib/plugin') // vue-loader
const MiniCssExtractPlugin = require("mini-css-extract-plugin") // 提取 css

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
      port: 8888,
      contentBase: './dist',
      hot: true
    },

    resolve: {
      extensions: ['.js', '.vue', '.json', '.css', '.scss'], // webpack不再试着用默认的拓展名解析模块
    },

    module: {
        rules: [
            {
              test: /\.vue$/,
              use: 'vue-loader'
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                // include: path.resolve(__dirname, 'src'),
                exclude: '/node_modules/'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ],
                exclude: '/node_modules/'
            },
            {
                test: /\.(ttf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: '8192',
                        name: 'font/[name].[ext]'
                    }
                }],
                exclude: '/node_modules/'
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['dist', 'dist/*.*']),

        new HtmlWebpackPlugin({
            title: 'webpack demo',
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),

        new VueLoaderPlugin(),

        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css',
          chunkFilename: '[id].[contenthash].css'
        })
    ]
};
