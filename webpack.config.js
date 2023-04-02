const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  watch: false,
  entry: "./src/index.js",
  // mode: "development",
  mode: "production",
  devtool: "inline-source-map",
  target: "web",
  stats: {
    children: true,
  },
  stats: { warnings: false },
  devServer: {
    client: {
      overlay: false,
    },
    static: ["src/assets"],
    compress: true,
    hot: false,
    host: "0.0.0.0",
    port: 3000,
    liveReload: true,
  },
  // watchOptions: {
  // Check for changes every second
  // Only necessary if using a Docker container
  //   poll: 1000,
  // },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Dad's Dinners",
      template: "src/index.html",
    }),
    new CopyPlugin({
      // this plugin copy's the asset folder to the production public folder
      patterns: [
        {
          from: "./src/assets",
          to: "./assets/",
          filter: async (resourcePath) => {
            if (resourcePath.includes("modules")) {
              return false;
            }

            return true;
          },
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ttf|ico|png|svg|webp|jpg|jpeg|json|txt|mp3|webmanifest)$/i,
        type: "asset/resource",
      },
    ],
  },
};
