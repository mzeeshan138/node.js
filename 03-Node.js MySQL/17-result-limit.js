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

  // Shorthend
  const sql3 = 'SELECT * FROM customers LIMIT 2, 5';
  const sql = 'SELECT * FROM customers LIMIT 5';
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
  // "OFFSET 2", means starting from the third position, not the second!
  const sql2 = 'SELECT * FROM customers LIMIT 5 OFFSET 2';
  con.query(sql2, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
