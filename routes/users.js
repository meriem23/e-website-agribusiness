const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/User')
const jwtSecret = "SecretCode"

// Register User
router.post('/', [
    check('firstname', 'Please enter your first name').not().isEmpty(),
    check('lastname', 'Please enter your last name').not().isEmpty(),
    check('address', 'Please enter your address').not().isEmpty(),
    check('role', 'Please enter your role').not().isEmpty(),
    check('phone', 'Please enter your phone number, must be 8 numbers').not().isEmpty().isLength({ min: 8, max: 8 }),
    check('email', 'Please put a valid email').isEmail(),
    check('password', 'Your password must be at least 6 characters').not().isEmpty().isLength({ min: 6 })
], (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() })
    }
    const { firstname, lastname, address, phone, email, password, role } = req.body
    // chercher dans la DB l'email saisie pour voir si le user existe déjà ou pas
    User.findOne({ email })
        .then(user => {
            if (user) {
                res.status(400).json({ msg: 'This user already exists' })
            } else {
                //creation d'un nouvel user si il n'esxiste pas 
                user = new User({
                    firstname,
                    lastname,
                    address,
                    phone,
                    email,
                    password,
                    role
                })
                //haching the password
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(user.password, salt, (err, hashedPassword) => {
                        user.password = hashedPassword
                        // save in the DB
                        user.save()
                        //generate the token payload
                        const payload = {
                            user: {
                                id: user.id
                            }
                        }
                        jwt.sign(payload, jwtSecret, { expiresIn: 3600000 }, (err, token) => {
                            if (err) throw err
                            res.json({ token })
                        })

                    })
                })

            }
        })
        .catch(err => console.log(err.message))
}
)
module.exports = router