const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
        new VueLoaderPlugin()
    ],
    devtool: 'source-map',
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '_c': path.resolve(__dirname, 'src/components')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'
                }
            },
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css/,
                loader: 'style-loader!css-loader'
            },
            {   
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            }
        ]
    },
}

module.exports = config