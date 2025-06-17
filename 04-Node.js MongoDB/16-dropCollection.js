const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const db = client.db('mydb');

    // Drop the collection
    const result = await db.dropCollection('customers');

    if (result) {
      console.log('Collection deleted');
    }
  } catch (err) {
    // Handle the case when the collection does not exist
    if (err.codeName === 'NamespaceNotFound') {
      console.log('Collection does not exist');
    } else {
      console.error('Error dropping collection:', err);
    }
  } finally {
    await client.close();
  }
}

run().catch(console.error);
