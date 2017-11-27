import 'source-map-support/register';

import chalk from 'chalk';
import express from 'express';
import http from 'http';

const isDevelopment = (process.env.NODE_ENV !== 'production');

/*
 * socket
 */
const app = express();
const server = new http.Server(app);

/*
 * client webpack
 */
if (process.env.USE_WEBPACK === 'true') {
  const webpackMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    webpack = require('webpack'),
    clientConfig = require('../../webpack.client.config');

  const compiler = webpack(clientConfig(true));

  app.use(webpackMiddleware(compiler, {
    publicPath: '/build/',
    stats: {
      colors: true,
      chunks: false,
      assets: false,
      timings: false,
      modules: false,
      hash: false,
      version: false
    }
  }));

  app.use(webpackHotMiddleware(compiler));

  console.log(chalk.bgRed('Using Webpack Dev MiddleWare. this is for dev only.'));
}

/*
 * configuration
 */
app.set('view engine', 'pug');

app.use(express.static('public'));

const useExternalStyles = !isDevelopment;

app.get('/', function (req, res) {
  // res.send('<h1>oh yes</h1>');

  res.render('index', {
    useExternalStyles
  });
});

/*
 * start server
 */
const port = process.env.port || 3000;

function startServer() {
  server.listen(port, () => {
    console.log('oh yes baby');
  });
}

startServer();

