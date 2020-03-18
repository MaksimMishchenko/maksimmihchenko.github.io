const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin'); 
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV == "development";

const optimize = () => {
    const config = {
        splitChunks: {
            chunks: "all"
        },
    }

    if(!isDev) {
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config
}

module.exports = {
    mode: "development",

    context: path.resolve(__dirname, 'src'),

    entry: "./js/render-cards.js",

    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "dist")
    },

    optimization: optimize(),

    resolve: {
        alias: {
            "@assets": path.resolve(__dirname, "assets")
        }
    },

    devServer: {
        port: 4400,
        hot: isDev
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            minify: {
                collapseWhitespace: !isDev
            } 
        }),
        
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['!static*', '**.js', '**.css']
        }),

        new MiniCssExtractPlugin({
            filename: "[name].[hash].css"
        })
    ],

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.(ttf|woff|woff2)/,
                use: ["file-loader"]
            }
        ]
    }
};