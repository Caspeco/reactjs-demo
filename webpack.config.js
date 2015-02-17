var webpack = require("webpack");

module.exports = {
  entry: [
      'webpack/hot/dev-server',
      './todoApp.jsx'
    ],
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
  	loaders: [
  		{test: /\.jsx$/, loaders: ["react-hot", "jsx-loader?harmony"]}
  	]
  },
  plugins: [
  	new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};