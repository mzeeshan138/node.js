const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'mydb';
const collectionName = 'products';

async function insertProducts() {
  const client = new MongoClient(url);
  try {
    // 1. Connect to the MongoDB server
    await client.connect();
    console.log('Connected successfully to server');

    // 2. Get database handle
    const db = client.db(dbName);

    // 3. Prepare documents with custom _id
    const docs = [
      { _id: 154, name: 'Chocolate Heaven' },
      { _id: 155, name: 'Tasty Lemon' },
      { _id: 156, name: 'Vanilla Dream' },
    ];

    // 4. Optionally check if collection exists (not strictly required; insertMany will auto-create if absent)
    const existing = await db
      .listCollections({ name: collectionName })
      .toArray();
    if (existing.length > 0) {
      console.log(`Collection "${collectionName}" already exists.`);
    } else {
      console.log(
        `Collection "${collectionName}" does not exist yet; it will be created by insertMany if absent.`
      );
    }

    // 5. Insert multiple documents
    try {
      const result = await db.collection(collectionName).insertMany(docs);
      console.log(`Number of documents inserted: ${result.insertedCount}`);
      console.log('Inserted IDs:', result.insertedIds);
    } catch (insertErr) {
      // If any _id duplicates exist, insertMany will throw. Handle as needed.
      console.error('Error inserting documents:', insertErr);
    }

    // After this runs, refresh MongoDB Compass to see "mydb" → "products" with these documents.
  } catch (err) {
    console.error('Error during operation:', err);
  } finally {
    // 6. Close the client
    await client.close();
    console.log('Connection closed');
  }
}

insertProducts();
