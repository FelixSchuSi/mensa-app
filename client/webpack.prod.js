const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: 'production',
  resolve: { extensions: ['.ts', '.js'] },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' },
      {
        test: /\.scss$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{ loader: 'file-loader', options: { outputPath: 'fonts/' } }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
  ]
};
