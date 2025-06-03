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

  //Escaping Query Values
  const adr = 'Mountain 21';
  const sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });

  // use a ? as a placeholder for the values you want to escap
  const adr2 = 'Mountain 21';
  const sql2 = 'SELECT * FROM customers WHERE address = ?';
  con.query(sql2, [adr2], function (err, result) {
    if (err) throw err;
    console.log(result);
  });

  // If you have multiple placeholders
  const name4 = 'Amy';
  const adr4 = 'Mountain 21';
  const sql4 = 'SELECT * FROM customers WHERE name = ? OR address = ?';
  con.query(sql4, [name4, adr4], function (err, result) {
    if (err) throw err;
    console.log(result);
  });

  // 3) The proper, parameterized way
  const sql3 = 'SELECT * FROM customers WHERE address = ?';
  con.query(sql3, [adr2], (err, result) => {
    if (err) throw err;
    console.log('Parameterized result (escaped):', result);
  });
});
