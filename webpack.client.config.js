const path = require('path'),
  webpack = require('webpack'),
  dirname = path.resolve('./');

const vendorModules = ['jquery'];

function createConfig(isDebug) {
  const devTool = (isDebug) ? 'eval-source-map' : 'source-map';

  const externals = [],

    plugins = [new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    })];

  const appEntry = ['./src/client/application.js'];

  if (!isDebug) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }));

  } else {
    plugins.push(new webpack.HotModuleReplacementPlugin());

    appEntry.splice(0, 0, 'webpack-hot-middleware/client');
  }

  return {
    target: 'web',

    entry: {
      application: appEntry,
      vendor: vendorModules
    },

    output: {
      filename: '[name].js',
      path: path.join(dirname, 'public', 'build'),
      publicPath: '/build/'
    },

    resolve: {
      alias: {
        shared: path.join(dirname, 'src', 'shared')
      }
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },

        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        }
      ]
    },

    devtool: devTool,

    externals: externals,

    plugins: plugins
  };
}

module.exports = createConfig;