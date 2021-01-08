const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { DefinePlugin } = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  resolve: { extensions: ['.ts', '.js'] },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.scss$/,
        include: /index\.scss$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.scss$/,
        exclude: /index\.scss$/,
        use: [
          'to-string-loader',
          { loader: 'css-loader', options: { esModule: false } },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{ loader: 'file-loader', options: { outputPath: '/fonts/', publicPath: '/fonts/' } }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html', base: '/' }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'node_modules/@ionic/core/dist/ionic/svg'), to: './svg' },
        { from: path.resolve(__dirname, 'svg/'), to: './svg' },
        { from: path.resolve(__dirname, 'images/'), to: './images' }
      ]
    }),
    new MiniCssExtractPlugin(),
    new DefinePlugin({
      ISPROD: JSON.stringify(true)
    }),
    new InjectManifest({
      swSrc: './service-worker.js',
      swDest: 'service-worker.js'
    })
  ]
};
