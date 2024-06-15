const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(App) {
  App.use(
    '/create',
    createProxyMiddleware({
      target: 'http://localhost:8001',
      changeOrigin: true,
      secure: false,
      logLevel: 'debug', // Add logging for debugging
    })
  );
};
