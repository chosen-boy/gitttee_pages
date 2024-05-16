const { merge } = require('webpack-merge')
const base = require('./webpack.base.js')
const {resolve} = require("node:path");

module.exports = merge(base, {
    mode: 'development', // 开发模式
    devServer: {
        open: true, // 编译完自动打开浏览器
        port: 8088,

        // 端口
        historyApiFallback: true,
        // 开启压缩
        compress: true,
        // 打开默认浏览器

        // 模块热更新
        hot:true
    },
    module: {
        rules: [
            // ...
            {
                test: /\.(less|css)$/,
                use: [
                    'style-loader',
                    'css-loader',

                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    ['postcss-preset-env', {}]
                                ]
                            }
                        }
                    },
                    'less-loader'
                ],
                // 排除 node_modules 目录
                exclude: /node_modules/
            },


        ]
    }

})
