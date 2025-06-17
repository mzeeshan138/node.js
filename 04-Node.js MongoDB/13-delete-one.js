const { MongoClient } = require('mongodb');
// If using ES modules, use: import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(uri, {
  // You may add options here if needed (e.g., serverSelectionTimeoutMS).
});

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();

    const database = client.db('mydb');
    const collection = database.collection('customers');

    // Filter for deletion
    const filter = { address: 'Mountain 21' };

    // Perform deleteOne
    const result = await collection.deleteOne(filter);

    if (result.deletedCount === 1) {
      console.log('Successfully deleted one document.');
    } else {
      console.log('No documents matched the query. Deleted 0 documents.');
    }
  } catch (err) {
    console.error('Error during deletion:', err);
  } finally {
    // Ensure the client is closed in all cases
    await client.close();
  }
}

// Invoke the function
run().catch(console.error);
