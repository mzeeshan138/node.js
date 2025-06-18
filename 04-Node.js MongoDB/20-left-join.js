const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const db = client.db('mydb');
    const ordersCollection = db.collection('orders');

    const pipeline = [
      {
        $lookup: {
          from: 'products',           // foreign collection
          localField: 'product_id',   // field in orders
          foreignField: '_id',        // field in products
          as: 'orderdetails'          // output array field
        }
      }
    ];

    const result = await ordersCollection.aggregate(pipeline).toArray();

    console.log(JSON.stringify(result, null, 2)); // pretty print
  } catch (err) {
    console.error('Aggregation error:', err);
  } finally {
    await client.close();
  }
}

run().catch(console.error);
