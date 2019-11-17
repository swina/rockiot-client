const path = require('path');

module.exports = {
  mode: 'production',
  entry: './app/gauge.js',//index.js',
  output: {
    library: 'iotgauge',
    filename: 'gauge.js',//'main.js',
    path: path.resolve(__dirname, 'build'),
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