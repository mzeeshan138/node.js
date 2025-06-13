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

  //Without Escaping SQL Injection
  //    Unsafe injection USING a balanced-quote trick
  //    Injection string:    ' OR '1'='1
  //    Builds to:           WHERE address = '' OR '1'='1'
  //    Which is syntactically correct and always TRUE
  const adr2 = "' OR '1'='1";
  const sql2 = "SELECT * FROM customers WHERE address = '" + adr2 + "'";
  console.log('Vulnerable SQL:', sql2);
  con.query(sql2, (err, result) => {
    if (err) throw err;
    console.log('VULNERABLE result (should return ALL rows):', result);
  });
});

// SELECT * FROM customers WHERE address = ' OR 1=1 --
//  -- begins a comment (good for injection)
