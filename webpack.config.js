const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const entry = './src/index.jsx'

const moduleRules = {
    rules: [
        { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env', '@babel/preset-react'] } } },
        { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    ],
}

const resolve = {
    extensions: ['.js', '.jsx'],
}

const output = {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
}

const devServer = {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3001,
    historyApiFallback: true,
}

const plugins = [
    new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './public/favicon.ico',
    }),
]

module.exports = {
    entry,
    module: moduleRules,
    resolve,
    output,
    devServer,
    plugins,
}
