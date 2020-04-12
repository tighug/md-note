const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { spawn } = require("child_process");

module.exports = {
  target: "electron-renderer",
  mode: "development",
  entry: "./src/renderer/index.tsx",
  output: {
    path: path.join(__dirname, "build/renderer"),
    filename: "index.js",
  },
  module: {
    rules: [
      { test: /\.tsx$/, use: "ts-loader" },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  plugins: [
    new HotModuleReplacementPlugin({
      multiStep: true,
    }),

    new HtmlWebpackPlugin({
      template: "src/renderer/index.html",
    }),
  ],
  devServer: {
    compress: true,
    watchContentBase: true,
    contentBase: path.join(__dirname, "build/renderer"),
    headers: { "Access-Control-Allow-Origin": "*" },
    historyApiFallback: {
      verbose: true,
      disableDotRule: false,
    },
    hot: true,
    inline: true,
    noInfo: true,
    port: 3000,
    publicPath: "http://localhost:3000/build/",
    watchOptions: {
      agreedTimeout: 300,
      ignored: /node_modules/,
      poll: 100,
    },
    before() {
      console.log("Starting Main Process...");
      spawn("npm", ["run", "start-main-dev"], {
        shell: true,
        env: process.env,
        stdio: "inherit",
      })
        .on("close", (code) => process.exit(code))
        .on("error", (spawnError) => console.error(spawnError));
    },
  },
};
