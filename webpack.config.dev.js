const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");
const { spawn } = require("child_process");
const consola = require("consola");

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
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  plugins: [
    new HotModuleReplacementPlugin({
      multiStep: true,
    }),
    new CopyPlugin([
      { from: "theme/*.css", to: "" },
      { from: "src/renderer/index.html", to: "" },
    ]),
    new WriteFilePlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, "build/renderer"),
    headers: { "Access-Control-Allow-Origin": "*" },
    historyApiFallback: {
      verbose: true,
      disableDotRule: false,
    },
    hot: true,
    inline: true,
    noInfo: true,
    quiet: true,
    overlay: true,
    port: 3000,
    publicPath: "http://localhost:3000/build/",
    before() {
      consola.info({ message: "Starting Main Process...", badge: true });

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
