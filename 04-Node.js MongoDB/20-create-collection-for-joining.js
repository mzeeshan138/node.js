const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const db = client.db('mydb');

    // Drop collections if they already exist (optional for fresh setup)
    await db
      .collection('products')
      .drop()
      .catch(() => {});
    await db
      .collection('orders')
      .drop()
      .catch(() => {});

    // Insert products
    const products = [
      { _id: 154, name: 'Chocolate Heaven' },
      { _id: 155, name: 'Tasty Lemons' },
      { _id: 156, name: 'Vanilla Dreams' },
    ];
    await db.collection('products').insertMany(products);
    console.log('✅ Products inserted');

    // Insert orders
    const orders = [{ _id: 1, product_id: 154, status: 1 }];
    await db.collection('orders').insertMany(orders);
    console.log('✅ Orders inserted');
  } catch (err) {
    console.error('❌ Error inserting data:', err);
  } finally {
    await client.close();
  }
}

run().catch(console.error);
