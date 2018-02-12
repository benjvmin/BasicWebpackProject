
const path = require("path");

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: "./js/index.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
module.exports = config;
