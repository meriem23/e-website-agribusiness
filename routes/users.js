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
    check('adresse', 'Please enter your adresse').not().isEmpty(),
    check('email', 'Please put a valid email').isEmail(),
    check('password', 'Your password must be at least 6 characters').not().isEmpty().isLength({ min: 6 })
], (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() })
    }
    const { firstname, lastname, adresse, email, password } = req.body
    // chercher dans la DB l'email saisie pour voir si le user existe déjà ou pas
    User.findOne({ email })
        .then(user => {
            if (user) {
                res.json({ msg: 'This user already exists' })
            } else {
                //creation d'un nouvel user si il n'esxiste pas 
                user = new User({
                    firstname,
                    lastname,
                    adresse,
                    email,
                    password
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