require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to MongoDB Atlas
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { dbName: 'data'});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB Atlas');
});

// Define schema for products
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image_url: String,
  color: String,
  type: String 
}, { collection: 'products' }); // Specify the collection name 'products'

// Define model for products without specifying collection name
const Product = mongoose.model('Product', productSchema);

// Define schema for customer records
const customerRecordSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String
}, { collection: 'customer_records' }); // Specify the collection name 'customer_records'

// Define model for customer records collection
const CustomerRecord = mongoose.model('CustomerRecord', customerRecordSchema);

// Define schema for sales
const saleSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'CustomerRecord' },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  total: Number,
  date: { type: Date, default: Date.now }
}, { collection: 'sales_records' }); // Specify the collection name 'sales_records'

// Define model for sales collection
const Sale = mongoose.model('Sale', saleSchema);

// GET route to fetch all candles
app.get('/api/candles', async (req, res) => {
  try {
    console.log('Fetching candle products...');
    const candles = await Product.find({ type: 'candles' });
    console.log('Candle products:', candles);
    res.status(200).json(candles);
  } catch (error) {
    console.error('Error fetching candles:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET route to fetch all flowers
app.get('/api/flowers', async (req, res) => {
  try {
    console.log('Fetching flower products...');
    const flowers = await Product.find({ type: 'flowers' });
    console.log('Flower products:', flowers);
    res.status(200).json(flowers);
  } catch (error) {
    console.error('Error fetching flowers:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET route to fetch all bundles
app.get('/api/flowers', async (req, res) => {
    try {
      console.log('Fetching bundles...');
      const bundles = await Product.find({ type: 'bundles' });
      console.log('Bundles:', bundles);
      res.status(200).json(bundles);
    } catch (error) {
      console.error('Error fetching bundles:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// POST route to add a new product
app.post('/api/products', async (req, res) => {
    try {
        const products = req.body; // Assuming an array of products is sent in the request body
        const result = await Product.insertMany(products);
        console.log('Products added successfully:', result);
        res.status(201).json(result);
    } catch (error) {
        console.error('Error adding products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// POST route to add a new customer record
app.post('/api/customers', async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;
    const customerRecord = new CustomerRecord({ name, email, phone, address });
    await customerRecord.save();
    console.log('Customer record added successfully:', customerRecord);
    res.status(201).json(customerRecord);
  } catch (error) {
    console.error('Error adding customer record:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST route to record a sale
app.post('/api/sales', async (req, res) => {
  try {
    const { customer, items, total } = req.body;
    const sale = new Sale({ customer, items, total });
    await sale.save();
    console.log('Sale recorded successfully:', sale);
    res.status(201).json(sale);
  } catch (error) {
    console.error('Error recording sale:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET route to fetch all sales
app.get('/api/sales', async (req, res) => {
  try {
    console.log('Fetching all sales...');
    const sales = await Sale.find().populate('customer').populate('items');
    console.log('Sales:', sales);
    res.status(200).json(sales);
  } catch (error) {
    console.error('Error fetching sales:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST route for checkout
app.post('/api/checkout', async (req, res) => {
    try {
      const { customer, items, total } = req.body;
      // Assuming customer ID, product IDs, and total amount are provided in the request body
  
      // Here you can implement the logic to process the checkout, e.g., update inventory, create an order record, etc.
  
      // For demonstration purposes, let's just send a success message
      res.status(200).json({ message: 'Checkout successful' });
    } catch (error) {
      console.error('Error processing checkout:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
