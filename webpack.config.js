const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'Constants': path.resolve(__dirname, 'src/constants.js'),
            'Selectors': path.resolve(__dirname, 'src/__data__/selectors'),
            'Actions': path.resolve(__dirname, 'src/__data__/actions')
        }
    },
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './template.html',
        })
    ]
};