const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const db = client.db('mydb');
    const collection = db.collection('customers');

    // Find documents with a limit of 5
    const result = await collection.find().limit(5).toArray();

    console.log(result);
  } catch (err) {
    console.error('Error fetching documents:', err);
  } finally {
    await client.close();
  }
}

run().catch(console.error);
