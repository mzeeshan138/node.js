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

  con.query(
    'SELECT name, address FROM customers',
    function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      // console.log(result[1].address); //result object
      // console.log(fields); //fields objects
      console.log(fields[1].name);
    }
  );
});
