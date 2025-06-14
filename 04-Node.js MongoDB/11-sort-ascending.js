const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db('mydb');
    const collection = database.collection('customers');

    // Sort by name in ascending order
    const sortByName = { name: 1 };

    const results = await collection.find().sort(sortByName).toArray();

    console.log('Sorted Customers:', results);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
  }
}

run();
// { name: 1 } // ascending
// { name: -1 } // descending
