const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'mydb';
const collectionName = 'customers';

async function findAllCustomers() {
  const client = new MongoClient(url);
  try {
    // 1. Connect to MongoDB server
    await client.connect();
    console.log('Connected successfully to server');

    // 2. Get database handle
    const db = client.db(dbName);

    // 3. Perform find: empty filter {} returns all documents
    //    toArray() converts cursor to an array of documents
    const resultArray = await db.collection(collectionName).find({}).toArray();

    if (resultArray.length > 0) {
      console.log(`Found ${resultArray.length} documents:`);
      console.log(resultArray);
    } else {
      console.log(`No documents found in collection "${collectionName}".`);
    }
  } catch (err) {
    console.error('Error during find operation:', err);
  } finally {
    // 4. Close connection
    await client.close();
    console.log('Connection closed');
  }
}

findAllCustomers();
