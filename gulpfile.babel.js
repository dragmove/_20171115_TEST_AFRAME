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

gulp.task('webpack-dev-server:dev', function () {
  const server = new WebpackDevServer(devWebpack, devConfig.devServer);

  server.listen(devConfig.devServer.port, 'localhost', function (err) {
    if (err) console.error('[webpack-dev-server failed to start :', err);
  });
});

gulp.task('prod', function() {
  prodWebpack.run((error, stats) => {
    if(error) throw new Error(error);
  });
});


/*
function buildMinJS(name, options) {
  var entry = {};
  entry[name] = ['./app/src/' + name + '.js'];

  var dist = 'build';

  if (options) {
    if (options.requireBabelPolyfill === true) entry[name].unshift('babel-polyfill');
    if (options.distPath) dist = options.distPath;
  }

  var config = extend({}, require('./webpack.config.js'), {
    entry: entry,

    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          drop_console: true,
          warnings: false
        },
        sourceMap: true
      }),

      new webpack.BannerPlugin({
        banner: banner(),
        raw: true
      })
    ]
  });

  return gulp.src('')
    .pipe(webpackStream(config, webpack))
    .pipe(gulp.dest(dist));
};

gulp.task('lint', function () {
  return gulp.src('app/src/*')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
 */

// build js
/*
 gulp.task('buildMain', () => {
 buildMinJS('main', {requireBabelPolyfill: true, distPath: './build/'})
 });
 */