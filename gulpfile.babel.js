var pkg = require('./package.json'),
  extend = require('extend'),
  gulp = require('gulp'),
  webpack = require('webpack'),
  WebpackDevServer = require('webpack-dev-server'),
  webpackStream = require('webpack-stream'),
  eslint = require('gulp-eslint');

function banner() {
  return `/*
 * ${pkg.name} ${pkg.version}
 * ${pkg.homepage}
 *
 * The MIT License (MIT)
 * Copyright (c) 2016-2017 Hyun-Seok.Kim, dragmove@gmail.com
 */
`;
}

/*
 * run server - connect http://localhost:9000/webpack-dev-server
 */
const config = require('./webpack.config.js'),
  devConfig = config(true),
  prodConfig = config(false),
  devWebpack = webpack(devConfig),
  prodWebpack = webpack(prodConfig);

gulp.task('dev:webpack-dev-server', function () {
  const server = new WebpackDevServer(devWebpack, devConfig.devServer);

  server.listen(devConfig.devServer.port, 'localhost', function (err) {
    if (err) console.error('[webpack-dev-server failed to start :', err);
  });
});

gulp.task('prod:build', function () {
  prodWebpack.run((error, stats) => {
    if (error) throw new Error(error);
  });
});