const path = require("path");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const buildPath = path.resolve(__dirname, "dist", "universal");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: buildPath,
  },
  plugins: [new CleanWebpackPlugin()],
});
