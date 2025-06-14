const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'mydb';
const collectionName = 'customers';

async function findOneCustomer() {
  const client = new MongoClient(url);
  try {
    // 1. Connect to MongoDB server
    await client.connect();
    console.log('Connected successfully to server');

    // 2. Get database handle
    const db = client.db(dbName);

    // 3. Perform findOne. Empty filter {} returns the first document in the collection.
    const result = await db.collection(collectionName).findOne({});
    if (result) {
      console.log('Found document:', result);
      // If you only want the name field:
      if (result.name !== undefined) {
        console.log('Name:', result.name);
      } else {
        console.log('The found document does not have a "name" field.');
      }
    } else {
      console.log(`No documents found in collection "${collectionName}".`);
    }
  } catch (err) {
    console.error('Error during findOne operation:', err);
  } finally {
    // 4. Close connection
    await client.close();
    console.log('Connection closed');
  }
}

findOneCustomer();
