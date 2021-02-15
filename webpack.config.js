const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const devOptions = {
  mode: 'development',
  devtool: 'inline-source-map',
  watchOptions: {
    aggregateTimeout: 0,          // debounce time for re-compile
    ignored: ['node_modules/**'],
  },
};

const prodOptions = {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin(),              // 压缩js
      new OptimizeCssAssetsWebpackPlugin(),   // 压缩css #TODO: 好像其实没有压缩？？main.css还是很大
    ],
  },
};

const isProd = process.env.MODE === 'production' || false;

const options = isProd ? prodOptions : devOptions;

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: `react-folder-tree-demos.bundle${isProd ? '.min' : ''}.js`,
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
        test: /\.(js|mjs|jsx|ts|tsx)$/,
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
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,    // extract css to a separate file, reduce main chunk size
          // 'style-loader',   // creates style nodes from JS strings
          'css-loader',     // translates CSS into CommonJS
          'sass-loader',    // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024,       // only use url loader for file less than 10KB, otherwise use file-loader
            name: 'static/[name].[hash:8].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    // generates an HTML file by injecting automatically all our generated bundles.
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      favicon: path.resolve(__dirname, './public/pokeball.ico'),
      filename: 'index.html',
    }),
    new CleanTerminalPlugin(),     // clear terminal in each build
    new MiniCssExtractPlugin(),    // extract css to a separate file, reduce main chunk size
    new BundleAnalyzerPlugin(),
  ],
  ...options,
};
