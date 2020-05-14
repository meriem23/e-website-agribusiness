const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const User = require('../models/User')
const Cart = require('../models/Cart')

//Get cart public
router.get('/',(req,res)=>{
    Cart.find()
    .then(cart => res.json(cart))
    .catch(err => console.log(err.message))
})

// Add cart private
router.post('/',auth,(req,res)=>{
    const {cart} = req.body
    const newCart = new Cart({
        cart,
        user: req.user.id
    })
    newCart.save()
    .then(order => res.json(order))
    .catch(err => console.log(err.message))
})

module.exports= router