const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Product = require('../models/Product')

router.post('/', [
    check('name','Submit the product name').not().isEmpty(),
    check('category','Is the product from animal or vegetal origin ?').not().isEmpty(),
    check('family','Choose the product family: Tomatoes, Carrots, Live Milk, Honey ...').not().isEmpty(),
    check('unit','Choose the buying unit: Litres, Kilograms ...').not().isEmpty(),
    check('price','Submit the price per unit').not().isEmpty(),
] ,(req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() })
    }
    const { name, image, category, quantity, unit, price } = req.body
    let newProduct = new Product({
        name,
        image,
        category,
        quantity,
        unit,
        price
    })
    newProduct.save()
              .then(() => res.send('New Product added !'))
              .catch(err => console.error(err))

})

module.exports = router