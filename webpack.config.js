const path = require('path')
console.log(path.resolve(__dirname))
const htmlWebpackPlugin = require('html-webpack-plugin')

let config = {
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: '[name].build.js',
        publicPath: '/dist/'
    },
    devServer: {
        watchContentBase: true
    },
    plugins: [
        // new htmlWebpackPlugin({
        //     template: './public/index.html',
        //     filename: 'index.html'
        // })
    ],
    devtool: 'source-map',
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    },
}

module.exports = config