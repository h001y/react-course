const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        bundle: './src/index.js'
    },
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        modules: [path.resolve(process.cwd(), 'src'), 'node_modules']
    },
    output: {
        contentBase: path.join(process.cwd(), 'dist'),
        filename: 'index.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.js/, use: 'babel-loader' },
            { test: /\.css/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: true,
                                localIdentName: '[path][name]__[local]--[hash:base64:5]'
                            }
                        }
                    },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            base: "/"
        }),
        new MiniCssExtractPlugin()
    ]
}