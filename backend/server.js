const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Connection_String = 'mongodb+srv://crishoyle:pfl3Pvny1AgCq60a@cluster0.qcxxxxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const Candle = require('./candleSchema'); 
const Flower = require('./flowerSchema');
const Order = require('./orderSchema');

const app = express();
app.use(cors());

app.use(express.json());

app.get('/', async (req, res) => {
  
    res.send('Welcome Petal and Wicks API')
})

app.get('/candles', async (req, res) => {
    try {
        const candles = await Candle.find();
        res.json(candles);
    } catch (error) {
        console.error('Error fetching candles:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/flowers', async (req, res) => {
    try {
        const flowers = await Flower.find();
        res.json(flowers);
    } catch (error) {
        console.error('Error fetching flowers:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/orders', async (req, res) => {
    try {
        const { items, totalPrice, customerInfo } = req.body;
        
        
        const newOrder = Order

        
        await newOrder.save();

        res.status(201).json({ message: 'Order placed successfully', order: newOrder });
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});