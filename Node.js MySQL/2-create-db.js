const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
});

con.connect(function (err) {
  if (err) throw err;
  console.log('Database is Connected!');
  con.query('CREATE DATABASE mydb', function (err, result) {
    if (err) throw err;
    console.log('Database created');
  });
});
