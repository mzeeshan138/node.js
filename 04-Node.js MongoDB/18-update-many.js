const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const db = client.db('mydb');
    const collection = db.collection('customers');

    const filter = { address: /^S/ }; // Matches addresses starting with "S"
    const update = { $set: { name: 'Minnie' } };

    const result = await collection.updateMany(filter, update);

    console.log(`${result.modifiedCount} document(s) updated`);
  } catch (err) {
    console.error('Error updating documents:', err);
  } finally {
    await client.close();
  }
}

run().catch(console.error);
