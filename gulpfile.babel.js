var pkg = require('./package.json'),
  gulp = require('gulp'),
  webpack = require('webpack'),
  // WebpackDevServer = require('webpack-dev-server'),
  // webpackStream = require('webpack-stream'),
  eslint = require('gulp-eslint'),
  chalk = require('chalk'),
  rimraf = require('rimraf');

const createServerConfig = require('./webpack.server'),
  createClientConfig = require('./webpack.client');

const $ = require('gulp-load-plugins')();

/*
 * public tasks
 */
gulp.task('clean:server', cb => rimraf('./build', cb));
gulp.task('clean:client', cb => rimraf('./public/build', cb));
gulp.task('clean', gulp.parallel('clean:server', 'clean:client'));

gulp.task('build:dev-server', cb => buildDevServer(cb));

gulp.task('dev', gulp.series('clean', 'build:dev-server', gulp.parallel(watchDevServer, reloadDevServer)));

// gulp.task('build:prod-client', cb => buildProdClient(cb));

/*
 * private server tasks
 */
const devServerWebpack = webpack(createServerConfig(true));
const prodServerWebpack = webpack(createServerConfig(false));

function buildDevServer(callback) {
  devServerWebpack.run((error, stats) => {
    outputWebpack('build:dev-server', error, stats);
    callback();
  });
}

function watchDevServer() {
  devServerWebpack.watch({}, (error, stats) => {
    outputWebpack('watch:dev-server', error, stats);
  });
}

function reloadDevServer() {
  return $.nodemon({
    script: './build/server.js',
    watch: './build',
    env: {
      'NODE_ENV': 'development',
      'USE_WEBPACK': 'true'
    }
  })
}

/*
 * helper
 */
function outputWebpack(label, error, stats) {
  if (error) throw new Error(error);

  if (stats.hasErrors()) {
    $.util.log(stats.toString({
      colors: true
    }));

  } else {
    const time = stats.endTime - stats.startTime;
    $.util.log(chalk.bgGreen(`Built ${label} in ${time} ms`));
  }
}

/*
 * private client tasks
 */
/*
function buildProdClient(callback) {
  const compiler = webpack(createClientConfig(false));

  compiler.run((error, stats) => {
    outputWebpack('prod:client', error, stats);
    callback();
  });
}
*/

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
/*
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
 */