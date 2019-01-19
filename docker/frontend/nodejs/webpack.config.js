const path = require("path");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
    mode: "development",

    entry: "./src/index.js",
    output: {
        filename: "js/main.js",
        path: path.resolve(__dirname, "dist")
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            babelrc: false,
                            presets: ["@babel/preset-env"]
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new BrowserSyncPlugin({
            host: "localhost",
            server: { baseDir: ["./dist"] }
        })
    ]
};
