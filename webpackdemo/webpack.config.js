const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const cleanPlugin = require("clean-webpack-plugin");

module.exports = {
    entry:{
        index:"./src/index.js"
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