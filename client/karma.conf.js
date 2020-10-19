module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'webpack'],
    files: [{ pattern: 'src/**/*.spec.ts', watched: false }],
    preprocessors: { 'src/**/*.spec.ts': ['webpack'] },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      resolve: { extensions: ['.ts', '.js'] },
      module: {
        rules: [
          { test: /\.ts$/, use: { loader: 'ts-loader', options: { transpileOnly: true } } },
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              { loader: 'css-loader', options: { sourceMap: true } },
              { loader: 'sass-loader', options: { sourceMap: true } }
            ]
          }
        ]
      }
    }
  });
};
