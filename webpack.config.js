const path = require("path");

/**
 * Loaders:
 * 1. loader load inline images as data URL
 * 2. transform files from a different language (like TypeScript) to JavaScript
 *
 * It's possible to specify loaders in an import statement
 * E.G. - import Styles from 'style-loader!css-loader?modules!./styles.css';
 */

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
