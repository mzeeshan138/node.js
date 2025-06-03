const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb',
});

con.connect(function (err) {
  if (err) throw err;
  console.log('Database is Connected!');

  con.query('SELECT * FROM customers', function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
