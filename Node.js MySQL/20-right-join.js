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
    'SELECT users.name AS user,products.name AS favorite FROM users RIGHT JOIN products ON users.favorite_product = products.id';
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

//inner --> SELECT * FROM users JOIN products ON users.favorite_product = products.id;
//inner --> SELECT * FROM users INNER JOIN products ON users.favorite_product = products.id;
//left --> SELECT * FROM users LEFT JOIN products ON users.favorite_product = products.id;
//right --> SELECT * FROM users RIGHT JOIN products ON users.favorite_product = products.id;
//full --> SELECT * FROM users LEFT JOIN products ON users.favorite_product = products.id UNION SELECT * FROM users RIGHT JOIN products ON users.favorite_product = products.id;
