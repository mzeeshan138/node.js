// If using CommonJS:
const { MongoClient } = require('mongodb');
// If using ES modules, you could instead use:
// import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(uri, {
  // The new driver defaults (unified topology, new URL parser) are used by default in recent versions.
  // You can add options here if needed, e.g., poolSize, serverSelectionTimeoutMS, etc.
});

async function run() {
  try {
    // Connect to the MongoDB server
    await client.connect();

    const database = client.db('mydb');
    const collection = database.collection('customers');

    // Build the query
    const query = { address: 'Park Lane 38' };

    // Optional: projection, e.g., exclude _id, include specific fields:
    const projection = { _id: 0, name: 1, address: 1 };

    // Execute the find
    const results = await collection.find(query).project(projection).toArray();

    console.log('Query results:', results);
  } catch (err) {
    console.error('Error during MongoDB operation:', err);
  } finally {
    // Ensure the client will close when you finish/error out
    await client.close();
  }
}

// Invoke the async function
run().catch(console.error);
