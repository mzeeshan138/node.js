const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'mydb';
const collectionName = 'customers';

async function findWithProjection() {
  const client = new MongoClient(url);
  try {
    // 1. Connect to the server
    await client.connect();
    console.log('Connected successfully to server');

    // 2. Get the database handle
    const db = client.db(dbName);

    // 3. Define projection: exclude _id, include name and address
    const projection = { projection: { _id: 0, name: 1, address: 1 } };
    // const projection = { projection: { _id: 0, address: 1 } };

    // You get an error if you specify both 0 and 1 values in the same object (except if one of the fields is the _id field)
    // const projection = { projection: { _id: 0, name: 0, address: 1 } };

    // 4. Execute find with projection and convert to array
    const resultArray = await db
      .collection(collectionName)
      .find({}, projection)
      .toArray();

    if (resultArray.length > 0) {
      console.log(`Found ${resultArray.length} documents (projected):`);
      console.log(resultArray);
    } else {
      console.log(`No documents found in collection "${collectionName}".`);
    }
  } catch (err) {
    console.error('Error during find operation:', err);
  } finally {
    // 5. Close the client
    await client.close();
    console.log('Connection closed');
  }
}

findWithProjection();
