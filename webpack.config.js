const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// var HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve('./src/index.js'),

    module: {
        rules: [
            {
                test: /\.(glb|gltf)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.woff$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        // limit: 50000
                    }
                }
            },
            {
                test: /\.css$/,
                use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader']
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            // injects bundle.js to our new index.html
            inject: true,
            // copies the content of the existing index.html to the new ./builds index.html
            template: path.resolve('./public/index.html')
        }),
        // css loader
        new MiniCssExtractPlugin({
            filename: './public/style.css'
        })
    ],

    // needed to load ammo's npm
    node: {
        fs: 'empty'
    }
};
