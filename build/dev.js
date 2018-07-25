const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./common')
const path = require('path')

module.exports = merge(common, {
    output: {
        filename: 'js/[name].js',
        publicPath: '/',
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
      port: 8888,
      contentBase: './dist',
      hot: true
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
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                exclude: '/node_modules/'
            }
        ]
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
})
