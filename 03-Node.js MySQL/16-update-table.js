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
    "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + ' record(s) updated');
  });
});

// {
//     fieldCount: 0,
//     affectedRows: 1,
//     insertId: 0,
//     serverStatus: 34,
//     warningCount: 0,
//     message: '(Rows matched: 1 Changed: 1 Warnings: 0',
//     protocol41: true,
//     changedRows: 1
//   }
