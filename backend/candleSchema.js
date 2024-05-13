const mongoose = require('mongoose');
Connection_String = 'mongodb+srv://hturayam11:Yavettehad3!@cluster0.qcxxxxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const candleSchema = new mongoose.Schema({
    name:{
        type: String
    },
    description:{
        type: String
    },
    img_url:{
        type: String
    },
    price:{
        type: Number
    }
});

const Candle = mongoose.model('Candle', {candleSchema} )



mongoose.connect(Connection_String, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));


module.exports = Candle;
