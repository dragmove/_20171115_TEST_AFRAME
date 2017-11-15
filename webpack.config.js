const webpack = require('webpack'),
  aid = require('aid.js'),
  path = require('path');

const truthy = aid.truthy,
  falsy = aid.falsy;

const dir = path.resolve('./'),
  vendorModules = ['aframe', 'rxjs'];

function createConfig(isDebug) {
  const devTool = truthy(isDebug) ? 'eval-source-map' : 'source-map';

  var plugins = [
    new webpack.BannerPlugin({
      banner: '',
      raw: true
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    })
  ];

  var entry = ['./app/src/main.js'];

  if (falsy(isDebug)) {
    // production
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      mangle: true,
      output: {
        beautify: false,
        comments: false,
      },
      compress: {
        unused: true,
        drop_console: true,
        warnings: true
      }
    }));

  } else {
    // development
    entry.unshift('webpack-dev-server/client?http://localhost:9000', 'webpack/hot/dev-server');

    plugins.push(
      new webpack.HotModuleReplacementPlugin(),

      new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        mangle: false,
        output: {
          beautify: true,
          comments: true,
        },
        compress: {
          unused: false,
          drop_console: false,
          warnings: true
        }
      })
    );
  }


  return {
    context: dir,

    entry: {
      main: entry,
      vendor: vendorModules
    },

    output: {
      filename: '[name].js',
      path: path.resolve(dir, 'app/build')
      // publicPath: '/build/' // TODO - what ?
    },

    /*
     resolve: {
     alias: {
     shared: path.join(dir, 'src', 'shared')
     }
     },
     */

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {
                'modules': false
              }]
            ]
          }
        },

        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'eslint-loader'
        }
      ]
    },

    // https://webpack.js.org/configuration/devtool/
    devtool: devTool,

    plugins: plugins,

    devServer: {
      contentBase: './app',
      noInfo: true, //  --no-info option
      // host: '',
      port: 9000,
      hot: true,
      inline: true
    }
  };
}

module.exports = createConfig;