const base = require("./webpack.base");
const merge = require("webpack-merge");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const webpack = require("webpack");

const env = require("../config/dev.env");

module.exports = merge(base, {
    plugins: [
        new BrowserSyncPlugin({
            host: "localhost",
            server: { baseDir: ["./dist"] }
        }),

        new webpack.DefinePlugin({
            "process.env": JSON.stringify(env)
        })
    ]
});
