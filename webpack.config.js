const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              url: true, // neccessary to load CSS url
            },
          },
        ],
      },
      {
        test: /\.jpg$/i,
        type: "asset/resource",
      },
      {
        test: /\.ttf$/i,
        type: "asset/resource",
      },
    ],
  },
};
