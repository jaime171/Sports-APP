var path = require('path');

module.exports = {
    entry: [
        path.resolve(__dirname, 'components') + '/common/login'
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
                include: path.resolve(__dirname, 'components'),
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                },

            }
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
}