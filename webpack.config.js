var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        path.resolve(__dirname, 'scripts') + '/index'
    ],
    output: {
        path: path.resolve(__dirname, 'public') + '/scripts',
        filename: 'bundle.js',
        publicPath: '/scripts/'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                include: path.resolve(__dirname, 'scripts'),
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                },

            }
        ]
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            'AppUrls': path.resolve(__dirname, 'scripts') + '/appUrls',
            'Helpers': path.resolve(__dirname, 'scripts') + '/helpers'
        }
    },
    plugins: [

        new webpack.ProvidePlugin({
            'AppUrls': 'AppUrls',
            'Helpers': 'Helpers'
        })

    ],
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
}