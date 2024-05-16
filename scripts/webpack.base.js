const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'), // 使用自定义模板
        }),
    ],
    devtool: 'inline-source-map',
    entry: path.resolve(__dirname, '../src/index.tsx'),
    output: {
        path: path.resolve(__dirname, '../dist'), // 打包后的代码放在dist目录下

        filename: '[name].[hash:8].js', // 打包的文件名
        clean: true,
    },
    resolve: {
        // 配置 extensions 来告诉 webpack 在没有书写后缀时，以什么样的顺序去寻找文件
        extensions: ['.mjs','.js', '.json', '.jsx', '.ts', '.tsx'], // 如果项目中只有 tsx 或 ts 可以将其写在最前面
        alias: {
            '@': path.resolve(__dirname, '../src'),

        },
    },
    module: {
        rules: [
            {
                test: /.(jsx?)|(tsx?)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: 'iOS 9, Android 4.4, last 2 versions, > 0.2%, not dead', // 根据项目去配置
                                    useBuiltIns: 'usage', // 会根据配置的目标环境找出需要的polyfill进行部分引入
                                    corejs: 3, // 使用 core-js@3 版本
                                },
                            ],
                            ['@babel/preset-typescript'],
                            ['@babel/preset-react'],
                        ],
                    },
                },
            },

            {
                //处理图片资源
                test: /\.(jpg|png|gif|jpeg)$/,
                //------下载url-loader file-loader
                //loader只有一个时
                loader:'file-loader',
                options:{
                    //设置当图片小于8kb就会被base64处理
                    //优点：减少请求数量（减轻服务器压力）/缺点:图片体积会更大（文件请求速度更慢）
                    limit:8*1024,
                    esModule:false
                },
                type: 'javascript/auto'
            },
            {
                // 命中字体包
                test: /\.(woff|woff2|eot|ttf|otf|truetype)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192, // 小于 8KB 的文件转换为 base64 格式
                            name: 'fonts/[name].[ext]'
                        }
                    }
                ]
            },



        ],
    },

}
