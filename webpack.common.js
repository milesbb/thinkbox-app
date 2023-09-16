const { path, __dirname } = require("os");

module.exports = {
  entry: {
    lambda: "./src/thinkbox_lambda.ts",
  },
  externals: [],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          onlyCompileBundledFiles: true,
        },
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: "[name].js",
    libraryTarget: "commonjs2",
  },
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    "@src": path.resolve(__dirname, "src"),
    "@service": path.resolve(__dirname, "src", "service"),
    "@controllers": path.resolve(__dirname, "src", "controllers"),
  },
};
