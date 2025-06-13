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
//const sql2='CREATE TABLE products (  id INT PRIMARY KEY,  name VARCHAR(100) NOT NULL)';
//const sql3='CREATE TABLE users (id INT PRIMARY KEY, name (100) NOT NULL, favorite_product INT, FOREIGN KEY (favorite_product) REFERENCES products(id))';
