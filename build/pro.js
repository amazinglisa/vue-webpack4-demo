const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./common')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 提取 css

module.exports = merge(common, {
    output: {
        filename: 'js/[name].[chunkhash].js',
        publicPath: '/',
        path: path.resolve(__dirname, '../dist')
    },

    module: {
        rules: [
            {
              test: /\.vue$/,
              use: [{
                loader: 'vue-loader',
                options: {
                  loaders: [{
                    scss: [MiniCssExtractPlugin.loader, 'vue-style-loader', 'css-loader, sass-loader']
                  }]
                }
              }]
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
                // include: path.resolve(__dirname, 'src'),
                exclude: '/node_modules/'
            }
        ]
    },

    optimization: {
        runtimeChunk: {
            name: 'manifest'
        },

        splitChunks: {
          cacheGroups: {
              vendor: {
                  name: 'vendor',
                  chunks: 'initial',
                  priority: -10,
                  reuseExistingChunk: false,
                  test: /node_modules\/(.*)\.js/
              }
          }
        }
    },

    plugins: [
        // keep module.id stable when vendor modules does not change
        new webpack.HashedModuleIdsPlugin(),

        new MiniCssExtractPlugin({
          filename: 'css/[name].[contenthash].css'
        })
    ]
});
