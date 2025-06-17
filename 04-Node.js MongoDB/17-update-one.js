const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const db = client.db('mydb');
    const collection = db.collection('customers');

    const filter = { address: 'Valley 345' };
    const update = { $set: { name: 'Mickey', address: 'Canyon 123' } };
    //  const update = { $set: { address: "Canyon 123" } };//Update Only Specific Fields

    const result = await collection.updateOne(filter, update);

    if (result.matchedCount > 0) {
      console.log('1 document updated');
    } else {
      console.log('No matching document found to update');
    }
  } catch (err) {
    console.error('Error updating document:', err);
  } finally {
    await client.close();
  }
}

run().catch(console.error);
