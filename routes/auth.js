const express = require('express')
const router = express.Router()
const { check , validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/User')
const auth = require('../middleware/auth')

const jwtSecret = "SecretCode"

// Get which User is logged in 
router.get('/',auth,(req,res)=>{
    User.findById(req.user.id)
    .then(user => res.json(user))
    .catch(err => console.log(err.message))
})
// Login the User
router.post('/',[
    check('email','Please enter a valid e-mail').isEmail(),
    check('password','Password required').not().isEmpty()
],(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.json({errors: errors.array})
    }
    const {email,password} = req.body
    User.findOne({email})
    .then(user =>{
        if(!user){
            //Checking if user exists
            return res.json({msg:'You must register first'})
        } else {
            //User exists so we compare passwords
            bcrypt.compare(password, user.password,(err,isMatch)=>{
                if(err) {console.log(err.message)}else{
                    if(isMatch){
                        const payload = {
                            user: {
                                id: user.id
                            }
                        }
                        jwt.sign(payload, jwtSecret,{ expiresIn: 3600000 }, (err, token) => {
                            if (err) throw err
                            res.json({ token })
                        })
                    } else {
                        return res.json({ msg: 'You entered the wrong password' })
                    }
                }
            })
        }
    })
    .catch(err => console.log(err.message))
})


module.exports = router