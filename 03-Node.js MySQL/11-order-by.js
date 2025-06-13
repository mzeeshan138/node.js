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

  con.query('SELECT * FROM customers ORDER BY name', function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
