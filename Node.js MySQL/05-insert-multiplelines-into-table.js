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

  const sql = 'INSERT INTO customers (name, address) VALUES ?';
  const values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633'],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log('Number of records inserted: ' + result.affectedRows);
  });
});

/*{
  fieldCount: 0,
  affectedRows: 14,
  insertId: 0,
  serverStatus: 2,
  warningCount: 0,
  message: '\'Records:14  Duplicated: 0  Warnings: 0',
  protocol41: true,
  changedRows: 0
} */

// const sql2 = `INSERT INTO products (id, name) VALUES  (154, 'Chocolate Heaven'),  (155, 'Tasty Lemons'),  (156, 'Vanilla Dreams')`;
// const sql3 = `INSERT INTO users (id, name, favorite_product) VALUES(1, 'John', 154),(2, 'Peter', 154),(3, 'Amy', 155),(4, 'Hannah', NULL),(5, 'Michael', NULL)`;
