var path = require('path');

var commonModule = {
    exclude: /(node_modules|bower_components)/,
    loaders: [
        { test: /\.jsx?$/, loader: 'babel-loader' }
    ]
};

var commonResolve = {
    alias: {
        templates: './templates'
    },
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
};

module.exports = [
    {
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, "dist"),
            filename: 'bundle.js'
        },
        target: 'web',
        debug: true,
        devtool: 'cheap-module-eval-source-map',
        devServer: {
            contentBase: "./dist"
        },
        resolve: commonResolve,
        module: commonModule,
    },
];
