const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require('path');

const config = require(path.resolve(__dirname, '../webpack.config.js'));

const options = {
  hot: true,          // hot module replacement
  open: true,         // open a new window when starting server
  stats: {
    color: true,
  },
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

const port = 1234;
server.listen(port, 'localhost', () => {
  console.log(`dev server listening on port ${port}`);
});
