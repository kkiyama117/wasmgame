const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

const dist = path.resolve(__dirname, "dist");

module.exports = {
  mode: "production",
  entry: {
    index: "./js/index.js"
  },
  output: {
    path: dist,
    publicPath: "/",
    filename: "[name].js"
  },
  devServer: {
    static: {
      directory: dist,
      staticOptions: {},
    },
  },
  // experiments: {
  //   asyncWebAssembly: true,
  // },
  plugins: [
    new CopyPlugin({
        patterns: [
            path.resolve(__dirname, "static"),
          //{
            //from: path.resolve(__dirname, "static"),
            //to: path.resolve(__dirname,"static"),
            //toType: 'dir',
          //}
        ]
    }),
    new WasmPackPlugin({
      crateDirectory: __dirname,
    }),
  ]
};
