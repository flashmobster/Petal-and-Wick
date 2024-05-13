const express = require('express');
const cors = require('cors');
require('dotenv').config();

const Candle = require('./candleSchema'); 
const Flower = require('./candleSchema');

const app = express();
app.use(cors());

app.get('/', async (req, res) => {
  
    res.send('Welcome to candles and flowers API')
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

app.post('/', async (req, res) => {


    console.log()
    res.send()
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});