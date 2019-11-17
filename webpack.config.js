const path = require('path');

module.exports = {
  mode: 'production',
  entry: './app/rockiot.server.js',//index.js',
  output: {
    library: 'rockiot',
    filename: 'rockiot.server.js',//'gauge.js',//'main.js',
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
