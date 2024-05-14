const mongoose = require('mongoose');
const Connection_String = 'mongodb+srv://crishoyle:pfl3Pvny1AgCq60a@cluster0.qcxxxxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const { Schema } = mongoose; 
const Customer = require('./customerSchema');

const orderSchema = new Schema({
    name: {
        type: String
    },
    quantity: {
        type: Number
    },
    img_url: {
        type: String
    },
    price: {
        type: Number
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    }
});

const Order = mongoose.model('Order', orderSchema);

mongoose.connect(Connection_String)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

module.exports = Order;