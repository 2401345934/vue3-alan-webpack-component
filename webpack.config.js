// webpack.config.js
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const { merge } = require("webpack-merge");

const baseConfig = {
  mode: "production",
  entry: "./src/index.js",
  
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      { test: /\.ts$/, use: ["ts-loader"] },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader",  "css-loader"],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};

module.exports = [
  merge(baseConfig, {
    output: {
      filename: "./[name]-umd.js",
      path: path.join(__dirname, "./dist"),
      libraryTarget: "umd",
    },
  }),
  merge(baseConfig, {
    output: {
      filename: "[name].js",
      path: path.join(__dirname, "./dist"),
      filename: "./[name]-commonjs.js",
      libraryTarget: "commonjs",
    },
  }),
  merge(baseConfig, {
    output: {
      filename: "[name].js",
      path: path.join(__dirname, "./dist"),
      filename: "./[name]-amd.js",
      libraryTarget: "amd",
    },
  }),
];