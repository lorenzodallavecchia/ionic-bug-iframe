const path = require("path");

module.exports = {
    mode: "development",
    context: __dirname,
    entry: {
        "app": "./app/index",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "./out"),
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            { test: /\.ts$/, exclude: /node_modules/, loader: "ts-loader" },
        ]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: __dirname,
        watchContentBase: true,
        overlay: {
            errors: true,
            warnings: false,
        },
    },
};