const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');

const devOptions = {
  mode: 'development',
  devtool: 'inline-source-map',
  watchOptions: {
    aggregateTimeout: 0, // debounce time for re-compile
    ignored: ['node_modules/**'],
  },
};

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'react-folder-tree-demos.bundle.js',
  },
  resolve: {
    // our code can resolve 'xxx' instead of writing 'xxx.jsx'
    extensions: ['*', '.js', '.jsx'],
    alias: {
      // Needed when library is linked via `npm link` to app
      // to tell app to always reolve the same react
      react: path.resolve('./node_modules/react'),
    },
  },
  module: {
    // For every file that match regex in 'test', webpack pipes the code through to loaders
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',   // creates style nodes from JS strings
          'css-loader',     // translates CSS into CommonJS
          'sass-loader',    // compiles Sass to CSS, using Node Sass by default
        ],
      },
    ],
  },
  plugins: [
    // generates an HTML file by injecting automatically all our generated bundles.
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      favicon: path.resolve(__dirname, '../public/pokeball.ico'),
      filename: 'index.html',
    }),
    // clear terminal in each build
    new CleanTerminalPlugin(),
  ],
  ...devOptions,
};
