import path from 'path';
import webpack from 'webpack';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import cleanWebpackPlugin from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpackMerge from 'webpack-merge';
import configBase from './webpack.config.base';

export default webpackMerge(configBase, {
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.s?css$/,
                    chunks: 'all',
                    enforce: true
                }    
            }
        }
    },
    plugins: [
        new cleanWebpackPlugin(['build']),
        new webpack.DefinePlugin({}),
        new UglifyJsPlugin({
            sourceMap: true,
            extractComments: true, // 是否提取注释
            uglifyOptions: {
                compress: {drop_console: true, warnings: false}
            }
        })
      
    ]    
});