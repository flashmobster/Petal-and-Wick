const mongoose = require('mongoose');
const Connection_String = 'mongodb+srv://crishoyle:pfl3Pvny1AgCq60a@cluster0.qcxxxxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


const customerSchema = new mongoose.Schema({
    name:{
        type: String
    },
    number:{
        type: Number
    },
    email:{
        type: String
    }
});

const Customer = mongoose.model('Customer', {customerSchema} )

mongoose.connect(Connection_String)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));



module.exports = Customer;    
