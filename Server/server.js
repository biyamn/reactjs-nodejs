const express = require('express')
const app = express()
const path = require('path')
import { createProxyMiddleware } from 'http-proxy-middleware';

app.listen(8080, () => {
  console.log('listening on 8080');
})

app.use(express.static(path.join(__dirname, '../Client/dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Client/dist/index.html'));
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Client/dist/index.html'));
})

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
};