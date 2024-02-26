const mongoose = require('mongoose');

const productData = mongoose.Schema({
    id: {
        type: String,
        default: new Date().getTime().toString(),
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    categories: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
});


module.exports = mongoose.model('productdata', productData);
