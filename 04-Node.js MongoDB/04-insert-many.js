const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'mydb';
const collectionName = 'customers';

async function insertManyDocuments() {
  const client = new MongoClient(url);
  try {
    // 1. Connect to MongoDB server
    await client.connect();
    console.log('Connected successfully to server');

    // 2. Get database handle
    const db = client.db(dbName);

    // 3. Prepare documents
    const docs = [
      { name: 'John', address: 'Highway 71' },
      { name: 'Peter', address: 'Lowstreet 4' },
      { name: 'Amy', address: 'Apple st 652' },
      { name: 'Hannah', address: 'Mountain 21' },
      { name: 'Michael', address: 'Valley 345' },
      { name: 'Sandy', address: 'Ocean blvd 2' },
      { name: 'Betty', address: 'Green Grass 1' },
      { name: 'Richard', address: 'Sky st 331' },
      { name: 'Susan', address: 'One way 98' },
      { name: 'Vicky', address: 'Yellow Garden 2' },
      { name: 'Ben', address: 'Park Lane 38' },
      { name: 'William', address: 'Central st 954' },
      { name: 'Chuck', address: 'Main Road 989' },
      { name: 'Viola', address: 'Sideway 1633' },
    ];

    // 4. Optionally check if collection exists (not strictly needed; insertMany will auto-create if absent)
    const existing = await db
      .listCollections({ name: collectionName })
      .toArray();
    if (existing.length > 0) {
      console.log(`Collection "${collectionName}" already exists.`);
    } else {
      console.log(
        `Collection "${collectionName}" does not exist yet; it will be created by insertMany.`
      );
    }

    // 5. Insert multiple documents
    const result = await db.collection(collectionName).insertMany(docs);
    console.log(`Number of documents inserted: ${result.insertedCount}`);
    console.log('Inserted IDs:', result.insertedIds);
    // After this completes, refresh MongoDB Compass to see the database/collection/documents.
  } catch (err) {
    console.error('Error during insertMany operation:', err);
  } finally {
    // 6. Close connection
    await client.close();
    console.log('Connection closed');
  }
}

insertManyDocuments();
