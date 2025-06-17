const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const db = client.db('mydb');
    const collection = db.collection('customers');

    const result = await collection.drop(); // returns true if collection was dropped

    if (result) {
      console.log('Collection deleted');
    }
  } catch (err) {
    // If collection does not exist, drop() throws an error
    if (err.codeName === 'NamespaceNotFound') {
      console.log('Collection does not exist');
    } else {
      console.error('Error while dropping collection:', err);
    }
  } finally {
    await client.close();
  }
}

run().catch(console.error);
