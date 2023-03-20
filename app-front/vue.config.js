const dotenv = require('dotenv').config();
const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': dotenv.parsed,
      }),
    ],
  },
};