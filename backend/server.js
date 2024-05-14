const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Connection_String = 'mongodb+srv://crishoyle:pfl3Pvny1AgCq60a@cluster0.qcxxxxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const Candle = require('./candleSchema'); 
const Flower = require('./flowerSchema');
const Order = require('./orderSchema');
const Customer = require('./customerSchema')

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

app.post('/products/flowers', async (req, res) => {
    try {
        const { img_url, name, quantity, price } = req.body;

        const newFlower = new Flower({
            img_url,
            name,
            quantity,
            price
        });
        await newFlower.save();

        res.status(201).json({ message: 'Flower added successfully', flower: newFlower });
    } catch (error) {
        console.error('Error adding flower:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/products/candles', async (req, res) => {
    try {
        const { img_url, name, quantity, price } = req.body;
        const newCandle = new Candle({
            img_url,
            name,
            quantity,
            price
        });
        await newCandle.save();

        res.status(201).json({ message: 'Candle added successfully', candle: newCandle });
    } catch (error) {
        console.error('Error adding candle:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.post('/orders', async (req, res) => {
    try {
        const { img_url, name, quantity, price } = req.body; 

        const newOrder = new Order({
            img_url,
            name,
            quantity,
            price
        });
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