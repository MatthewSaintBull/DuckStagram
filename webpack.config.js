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
  entry: ['./src/index.js', './src/carousel.js', './src/filters.js'],
  output: {
    filename: 'bundle.js',
  },
};