const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(process.cwd(), 'dist/assets')
    },
    resolve: {
        modules: [path.resolve(process.cwd(), 'src'), 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: 'babel-loader'
            },
            {
                test: /\.css/,
                use: [MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: true,
                                localIdentName: '[local]--[hash:base64:5]',
                            }
                        }
                    },
                    'postcss-loader']
            },
            {
                test: /\.json/,
                use: 'json-loader',
                type: 'javascript/auto'
            }
        ]
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            base: '/'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css'
        }),
        new WebpackManifestPlugin()
    ]
}