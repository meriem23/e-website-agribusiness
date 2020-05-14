const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CartSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    cart: {
        type: Array,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('cart', CartSchema)