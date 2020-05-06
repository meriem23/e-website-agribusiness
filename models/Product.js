const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
         data: Buffer,
         contentType: String,
         required: true
    },
    category: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: false,
    },
    unit: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
    
})

module.exports = mongoose.model('Product', ProductSchema)