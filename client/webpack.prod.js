const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { DefinePlugin } = require('webpack');
const path = require('path');

module.exports = {
  mode: 'production',
  resolve: { extensions: ['.ts', '.js'] },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' },
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
        use: [{ loader: 'file-loader', options: { outputPath: '/fonts/', publicPath: '/mensa-app/fonts' } }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html', base:'/mensa-app/'}),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '404.html')
        },
      ],
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new DefinePlugin({
      ISPROD: JSON.stringify(true)
    })
  ]
};
