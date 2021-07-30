const path = require('path');


module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  entry: ['./src/carousel.js', './src/filters.js', './src/index.js'],
  output: {
    filename: 'bundle.js',
  },
};