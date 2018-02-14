//Super Basic Webpack Starter

//NodeJS
const path = require("path");

//Plugins
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  context: path.resolve(__dirname, "src"),
  entry: {
    app: "./js/index.js", 
    vendor: []
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },

  resolve: {},
  plugins: [
    new BrowserSyncPlugin({

      //BrowserSync will start only when you run Webpack in watch mode:
      // browse to http://localhost:3000/ during development
      host: "localhost",
      port: 3000,
      server: { baseDir: ["dist"] }
    }),

    //Automatically generates an HTML file linked with Webpack's bundle
    new HtmlWebpackPlugin({
      title: "Super Basic Webpack Starter Project"
    })
  ]
};

module.exports = config;
