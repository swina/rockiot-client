const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './app/rockiot.client.js',
  output: {
    library: 'rockiot',
    filename: 'rockiot.client.js',
    path: path.resolve(__dirname, 'build'),
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules(\/|\\)(?!(@feathersjs|debug))/,
      }
    ]
  }
};
