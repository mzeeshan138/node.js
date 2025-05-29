const url = require('url');
const adr = 'http://localhost:3000/default.htm?year=2017&month=february';
//Parse the address:
const q = url.parse(adr, true);

/*The parse method returns an object containing url properties*/
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

/*The query property returns an object with all the querystring parameters as properties:*/
const qdata = q.query;
console.log(qdata.month);
//console.log(q.query.month);

// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'localhost:3000',
//     port: '3000',
//     hostname: 'localhost',
//     hash: null,
//     search: '?year=2017&month=february',
//     query: [Object: null prototype] { year: '2017', month: 'february' },
//     pathname: '/default.htm',
//     path: '/default.htm?year=2017&month=february',
//     href: 'http://localhost:3000/default.htm?year=2017&month=february'
//   }
