const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");
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
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
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
      multiStep: false,
    }),

    new CopyPlugin([
      { from: "theme/*.css", to: "" },
      { from: "src/renderer/index.html", to: "" },
    ]),

    new WriteFilePlugin(),
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
