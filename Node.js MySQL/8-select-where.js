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

  //Select With a Filter
  con.query(
    "SELECT * FROM customers WHERE address = 'Park Lane 38'",
    function (err, result) {
      if (err) throw err;
      console.log(result);
    }
  );

  // Wildcard Characters
  con.query(
    "SELECT * FROM customers WHERE address LIKE 'S%'",
    function (err, result) {
      if (err) throw err;
      console.log(result);
    }
  );
});
