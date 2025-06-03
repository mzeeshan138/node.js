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

  const sql =
    'CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))';
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log('Table created');
  });
});
