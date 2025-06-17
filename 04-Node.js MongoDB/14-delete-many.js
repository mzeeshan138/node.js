const { MongoClient } = require('mongodb');
// If using ES modules, use:
// import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(uri, {
  // You can add options here if desired, e.g., serverSelectionTimeoutMS, poolSize, etc.
});

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();

    const database = client.db('mydb');
    const collection = database.collection('customers');

    // Filter: address starts with "O". For case-insensitive, use /^O/i
    const filter = { address: /^O/ };

    // Perform deleteMany
    const result = await collection.deleteMany(filter);

    // result.deletedCount holds number of documents deleted
    if (result.deletedCount > 0) {
      console.log(`${result.deletedCount} document(s) deleted.`);
    } else {
      console.log('No documents matched the query. Deleted 0 documents.');
    }
  } catch (err) {
    console.error('Error during deleteMany operation:', err);
  } finally {
    // Ensure the client is closed in all cases
    await client.close();
  }
}

// Invoke the function
run().catch(console.error);
