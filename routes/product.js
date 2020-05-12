const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')

const auth = require('../middleware/auth')
const Product = require('../models/Product')

//Private Routes
//Get Product
router.get('/', auth, (req, res) => {
    Product.find({ user: req.user.id })
        .then(products => res.json(products))
        .catch(err => console.log(err.message))
})

//Add Product
router.post('/', [auth, [
    check('name', 'Please enter the product name').not().isEmpty(),
    check('category', 'Please enter the product category').not().isEmpty(),
    check('quantity', 'Please enter the product quantity').not().isEmpty(),
    check('unit', 'Please enter the product unit').not().isEmpty(),
    check('price', 'Please enter the product price').not().isEmpty(),
    check('location', 'Please enter your location').not().isEmpty(),
    check('description', 'Please enter the product description').not().isEmpty(),
    check('image', 'Please enter the product pictures').not().isEmpty(),
]], (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() })
    }
    const { name, category, quantity, unit, price, location, description, image } = req.body
    const newProduct = new Product({
        name,
        category,
        quantity,
        unit,
        price,
        location,
        description,
        image,
        user: req.user.id
    })
    newProduct.save()
        .then(product => res.json(product))
        .catch(err => console.log(err.message))
})

//Delete Product
router.delete('/:id', auth, (req, res) => {
    Product.findById(req.params.id)
        .then(product => {
            if (!product) {
                return res.json({ msg: 'This Product was not found' })
            } else if (product.user.toString() !== req.user.id) {
                res.json({ msg: 'This action is not authorized' })
            } else {
                Product.findByIdAndDelete(req.params.id, (err, data) => {
                    res.json({ msg: "The product was deleted" })
                })
            }
        })
        .catch(err => console.log(err.message))
})

//Edit Product
router.put('/:id', auth, (req, res) => {
    const { name, category, quantity, unit, price, location, description, image } = req.body

    // Building a product object
    let productFields = {}
    if (name) productFields.name = name
    if (category) productFields.category = category
    if (quantity) productFields.quantity = quantity
    if (unit) productFields.unit = unit
    if (price) productFields.price = price
    if (location) productFields.location = location
    if (description) productFields.description = description
    if (image) productFields.image = image

    Product.findById(req.params.id)
        .then(product => {
            if (!product) {
                return res.json({ msg: 'This Product was not found' })
            } else if (product.user.toString() !== req.user.id) {
                res.json({ msg: 'This action is not authorized' })
            } else {
                Product.findByIdAndUpdate(req.params.id, { $set: productFields }, (err, data) => {
                    res.json({ msg: "The product was updated" })
                })
            }
        })
        .catch(err => console.log(err.message))
})

module.exports = router