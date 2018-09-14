module.exports = {
  entry: "./src/index", // string | object | array
  // Here the application starts executing
  // and webpack starts bundling
  output: {
  // options related to how webpack emits results
    path: path.resolve(__dirname, "public"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "bundle.js", // string
    // the filename template for entry chunks
  },
  module: {
    rules: [{
        test: /\.scss$/,
          use: [{
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }]
    }]
  }