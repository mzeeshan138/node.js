const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'mydb';

async function createDatabase() {
  const client = new MongoClient(url);

  try {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    console.log('Database created!');
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

createDatabase();

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });
