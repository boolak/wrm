import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const STATIC_PATH = 'static';
export default{
    entry: {
        main: ["babel-polyfill", "./src/index.js"],
        vendor: ['react', 'react-dom', 'react-router']
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: `${STATIC_PATH}/js/[chunkhash].[name].js`,
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.join(__dirname, 'src'),
                use: ['babel-loader']
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}