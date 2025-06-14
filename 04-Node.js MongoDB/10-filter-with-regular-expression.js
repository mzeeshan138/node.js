// CommonJS style:
const { MongoClient } = require('mongodb');
// If using ES modules, switch to:
// import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(uri, {
  // Add options if needed, e.g. serverSelectionTimeoutMS, poolSize, etc.
});

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();

    const database = client.db('mydb');
    const collection = database.collection('customers');

    // Regex query: address starts with "S"
    // If you want case-insensitive, use: { address: /^S/i }
    const query = { address: /^S/ };

    // Optional: project specific fields
    const projection = { _id: 0, name: 1, address: 1 };

    // Execute the find with regex
    const results = await collection.find(query).project(projection).toArray();

    console.log('Addresses starting with "S":', results);
  } catch (err) {
    console.error('Error during MongoDB operation:', err);
  } finally {
    // Close client to avoid hanging connections
    await client.close();
  }
}

// Invoke
run().catch(console.error);
