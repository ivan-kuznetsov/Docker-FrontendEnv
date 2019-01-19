const base = require("./webpack.base");
const merge = require("webpack-merge");
const webpack = require("webpack");

const env = require("../config/prod.env");

module.exports = merge(base, {
    mode: "production",

    plugins: [
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(env)
        })
    ]
});
