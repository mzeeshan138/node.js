// const { createServer } = require('node:http');//old
import { createServer } from 'http';

const hostname = '127.0.0.1';
// const hostname = 'localhost';
const PORT = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello World from Berlin_Tec!');
});

server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});

//node --watch 2-create-server-optimized.js
/* 
  when hostname=127.0.0.1 then both works http://127.0.0.1:3000/,http://localhost:3000/ 
  when hostname="localhost" then only works http://localhost:3000/ 
*/
