const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { DefinePlugin } = require('webpack');
const fs = require('fs');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: {
      rewrites: [{ from: /^\/[a-z]*/, to: '/mensa-app/404.html' }]
    },
    host: '0.0.0.0',
    port: 8080,
    public: 'localhost:8080',
    publicPath: '/mensa-app/',
    https: true,
    key: fs.readFileSync('../server/src/certs/server.key.pem'),
    cert: fs.readFileSync('../server/src/certs/server.cert.pem'),
    ca: fs.readFileSync('../server/src/certs/intermediate-ca.cert.pem')
  },
  resolve: { extensions: ['.ts', '.js'] },
  module: {
    rules: [
      { test: /\.ts$/, use: { loader: 'ts-loader', options: { transpileOnly: true } } },
      {
        test: /\.scss$/,
        include: /index\.scss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /index\.scss$/,
        use: [
          'to-string-loader',
          { loader: 'css-loader', options: { sourceMap: true, esModule: false } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{ loader: 'file-loader', options: { outputPath: 'fonts/', publicPath: '/mensa-app/fonts' } }]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }), new CopyPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, '404.html'),
      },
    ],
  }),
  new DefinePlugin({
    ISPROD: JSON.stringify(false)
  })]
};
