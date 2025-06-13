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

  const sql = 'DROP TABLE customers';
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log('Table deleted');
  });
});
