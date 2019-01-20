const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "cheap-module-eval-source-map",

    entry: "./src/index.js",
    output: {
        filename: "js/main.js",
        path: path.resolve(__dirname, "../dist")
    },

    plugins: [
        new BrowserSyncPlugin({
            host: "localhost",
            server: { baseDir: ["./dist"] },
            open: false
        })
    ],

    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
};
