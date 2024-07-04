import { createProxyMiddleware } from 'http-proxy-middleware';
import { Application } from 'express';

module.exports = function(app: Application) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://192.168.0.1:8080',
      changeOrigin: true,
    })
  );
};
