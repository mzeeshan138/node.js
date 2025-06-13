const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'mydb';
const collectionName = 'customers';

async function insertOneDocument() {
  const client = new MongoClient(url);
  try {
    // 1. Connect to MongoDB server
    await client.connect();
    console.log('Connected successfully to server');

    // 2. Get database handle
    const db = client.db(dbName);

    // 3. Insert one document
    const myobj = { name: 'Company Inc', address: 'Highway 37' };
    const result = await db.collection(collectionName).insertOne(myobj);
    console.log('1 document inserted with _id:', result.insertedId);

    // After this insert, you can refresh Compass and you’ll see:
    // - Database "mydb"
    // - Collection "customers"
    // - The inserted document
  } catch (err) {
    console.error('Error during insert:', err);
  } finally {
    // 4. Close connection
    await client.close();
    console.log('Connection closed');
  }
}

insertOneDocument();
