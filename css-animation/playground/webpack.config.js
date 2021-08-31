const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js"
  },
  devtool: "inline-source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ title: "Spinning", template: "src/index.html" })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000
  },
  module: {
    rules: [
      { test: /\.html$/, use: ["html-loader"] },
      {
        test: /\.s[ac]ss$/,
        use: [
          // inject css into the DOM
          "style-loader",
          // translate CSS into CommonJS
          "css-loader",
          // compiles Sass to CSS
          "sass-loader"
        ]
      },
      { test: /\.(png|svg|jpg|gif)$/, use: ["file-loader"] }
    ]
  }
};
