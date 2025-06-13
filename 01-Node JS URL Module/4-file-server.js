const { createServer } = require('http');
const url = require('url');
const fs = require('fs');

const PORT = 3000;
const hostname = '127.0.0.1';

const server = createServer(function (req, res) {
  const q = url.parse(req.url, true);
  let file = '.' + q.pathname;
  console.log(file);

  fs.readFile(file, function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end('404 Not Found');
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
});

server.listen(PORT, hostname, () => {
  console.log(`Server is running on http://${hostname}:${PORT}`);
});
