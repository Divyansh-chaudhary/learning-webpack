## Follow below steps to run this project

1. npm i
2. npm run build

Open the index.html file of /dist in browser

## Simple explanation of some topics of webpack

https://webpack.js.org

Loaders:

1. loader load inline images as data URL
2. transform files from a different language (like TypeScript) to JavaScript

It's possible to specify loaders in an import statement
e.g. - import Styles from 'style-loader!css-loader?modules!./styles.css';
