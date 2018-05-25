import path from 'path';
import webpackMerge from 'webpack-merge';
import configBase from './webpack.config.base';

export default webpackMerge(configBase, {
    module:{
        
    },
    plugins: [

    ],
    devServer: {
        host: 'localhost',
        port: '8085',
        contentBase: path.join(__dirname, 'build'),
    }
});