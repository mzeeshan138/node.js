const http = require('http');
const fs = require('fs');
http
  .createServer(function (req, res) {
    fs.readFile('1-demofile1.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  })
  .listen(3000, () => {
    console.log('server is runing');
  });
