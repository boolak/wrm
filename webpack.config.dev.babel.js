import path from 'path';
import webpackMerge from 'webpack-merge';
import configBase from './webpack.config.base';

export default webpackMerge(configBase, {
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [{
            /**
             * eslint代码规范校验
             */
            test: /\.(js|jsx)$/,
            enforce: 'pre',
            include: path.join(__dirname, 'src'),
            use: [{
                loader: 'eslint-loader',
                options: {
                    configFile: '.eslintrc.json'
                }
            }]
        }]
    },
    plugins: [

    ],
    devServer: {
        host: 'localhost',
        port: '8085',
        disableHostCheck: true,
        inline: true,
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'build')
    }
});