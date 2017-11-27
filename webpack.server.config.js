const path = require('path'),
  fs = require('fs'),
  webpack = require('webpack'),
  aid = require('aid.js');

const nodeModules = fs.readdirSync("./node_modules").filter(d => d != ".bin");
function ignoreNodeModules(context, request, callback) {
  if (request[0] === ".") return callback();

  const module = request.split("/")[0];
  if (nodeModules.indexOf(module) !== -1) return callback(null, "commonjs " + request);

  return callback();
}

function createConfig(isDebug) {
  const devTool = aid.truthy(isDebug) ? 'eval-source-map' : 'source-map';

  // https://webpack.js.org/configuration/externals/
  let externals = [
      ignoreNodeModules

      /*
       function (context, request, callback) {
       if (/^(jquery|\$)$/.test(request)) {
       return callback(null, 'commonjs ' + request);
       }
       callback();
       }
       */
    ],

    plugins = [];

  return {
    context: __dirname,

    target: 'node',

    entry: './src/server/server.js',

    output: {
      filename: 'server.js',
      path: path.join(__dirname, 'build')
    },

    resolve: {
      alias: {
        shared: path.join(__dirname, 'src', 'shared')
      }
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              ["env", {
                "modules": false
              }]
            ]
          }
        },

        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        }
      ]
    },

    devtool: devTool,

    externals: externals,

    plugins: plugins
  }
}

module.exports = createConfig;