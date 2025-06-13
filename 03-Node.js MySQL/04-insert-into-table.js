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
    "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log('1 record inserted, ID: ' + result.insertId);
  });
});
