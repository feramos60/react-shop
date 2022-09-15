const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './scr/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'scr/components'),
            '@conteiners': path.resolve(__dirname, 'scr/conteiners'),
            '@styles': path.resolve(__dirname, 'scr/styles'),
            '@icons': path.resolve(__dirname, 'scr/assets/icons'),
            '@logos': path.resolve(__dirname, 'scr/assets/logos'),
        }
    },
    mode: 'development',
    module: {
       rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: 'html-loader',
                }
            ]
        },
        {
            test: /\.(css|scss)$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader",
            ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            type: 'asset'
        }       
       ] 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer:{
        static: {
            directory: path.join(__dirname, 'dist'),
          },
          historyApiFallback: true,
        compress: true,
        port: 3005,
    }
}