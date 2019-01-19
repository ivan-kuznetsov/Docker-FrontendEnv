const base = require("./webpack.base.js");
const merge = require("webpack-merge");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = merge(base, {
    plugins: [
        new BrowserSyncPlugin({
            host: "localhost",
            server: { baseDir: ["./dist"] }
        })
    ]
});
