const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const isInDevMode = argv.mode === "development";
  return {
    resolve: {
      extensions: [".ts", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)$/,
          exclude: /node_modules/,
          use: ["babel-loader", "eslint-loader"],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html",
      }),
    ],
    //Use original source as map if environment is dev
    devtool: isInDevMode ? "eval-source-map" : false,
  };
};
