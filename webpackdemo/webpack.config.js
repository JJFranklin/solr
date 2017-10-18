const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const cleanPlugin = require("clean-webpack-plugin");

module.exports = {
    entry:{
        index:"./src/index.js",
        app:"./src/app.js"
    },
    devtool:"inline-source-map",
    devServer:{
        contentBase:"./dist"
    },
    output:{
        filename:"[name]-bundle.js",
        path:path.resolve(__dirname,"dist")
    },
    plugins:[
        new cleanPlugin(["dist"]),
        new htmlWebpackPlugin({
            template:"./index.html",
            title:"new title",
            // inject:"head"
            // filename:"asset/app.html"
        })
    ],
}