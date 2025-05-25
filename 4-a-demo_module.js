// var http = require('http');
// var dt = require('./4-b-myfirstmodule');

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('The date and time are currently: ' + Date());
//     res.end();
//   })
//   .listen(3000, () => {
//     console.log('server is runing');
//   });

import { createServer } from 'http';
import { myDateTime } from './4-b-myfirstmodule.js';

const server = createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('The date and time are currently: ' + myDateTime());
  res.end();
});
server.listen(3000, () => {
  console.log('server is runing');
});
