const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

const neatPaths = require('bourbon-neat').includePaths;

const sassConfig = {
  loader: 'sass-loader',
  options: {
    sourceMap: true,
    includePaths: neatPaths,
  },
};

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
  },
  devtool: 'source-map',
  context: __dirname,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.scss$/,
        loader: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          sassConfig,
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        filename: 'index.html',
        template: path.resolve(__dirname, './src/index.html'),
      },
    ),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    // new CopyWebpackPlugin([{ from: 'assets' }]),
  ],
};
