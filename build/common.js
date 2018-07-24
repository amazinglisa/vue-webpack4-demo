const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成 html 模板
const CleanWebpackPlugin = require('clean-webpack-plugin') // 清除 dist 文件夹
const VueLoaderPlugin = require('vue-loader/lib/plugin') // vue-loader

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],

    resolve: {
      extensions: ['.js', '.vue', '.json', '.css', '.scss'], // webpack不再试着用默认的拓展名解析模块
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: [
                        ['env', {
                            targets: {
                                browsers: ['> 1%', 'last 2 versions']
                            }
                        }]
                      ],
                      plugins: ['transform-runtime'],
                    }
                },
                exclude: /node_modules/
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
        new CleanWebpackPlugin(['dist', 'dist/*.*'], {
          root: path.resolve(__dirname, '..')
        }),

        new HtmlWebpackPlugin({
            title: 'webpack demo',
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),

        new VueLoaderPlugin()
    ]
};
