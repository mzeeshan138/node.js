//node --watch 1-create-server.js
const http = require('http');

const PORT = 3000;
http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello World!');
  })
  .listen(PORT, () => {
    console.log(`Server is started on port ${PORT} `);
  });
