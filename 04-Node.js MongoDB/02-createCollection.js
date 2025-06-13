// Example: create a collection "customers" in database "mydb" using MongoDB Node.js driver v4+
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017'; // no trailing slash needed
const dbName = 'mydb';
const collectionName = 'customers';

async function createCollectionIfNotExists() {
  const client = new MongoClient(url, {
    // Optional settings; for local dev defaults are usually fine.
    // useUnifiedTopology: true,  // not needed in v4+, it's the default
  });
  try {
    // 1. Connect to the server
    await client.connect();
    console.log('Connected successfully to server');

    // 2. Get the database handle
    const db = client.db(dbName);

    // 3. Check if collection already exists (optional but often useful)
    const existing = await db
      .listCollections({ name: collectionName })
      .toArray();
    if (existing.length > 0) {
      console.log(`Collection "${collectionName}" already exists.`);
    } else {
      // 4. Create the collection
      await db.createCollection(collectionName);
      console.log(`Collection "${collectionName}" created!`);
    }

    // (Optional) You can also insert a document; this will auto-create the collection if it didn't exist:
    // const result = await db.collection(collectionName).insertOne({ createdAt: new Date(), info: 'initial doc' });
    // console.log('Inserted initial document with _id:', result.insertedId);
  } catch (err) {
    console.error('Error during operation:', err);
  } finally {
    // 5. Close the client
    await client.close();
    console.log('Connection closed');
  }
}

createCollectionIfNotExists();
