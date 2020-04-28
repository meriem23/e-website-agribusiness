const jwt = require('jsonwebtoken')
const jwtSecret = "SecretCode"

module.exports = function(req,res,next){
    // Get the token from the header in req
    const token = req.header('x-auth-token')
    //Check if token exists
    if (!token){ //No token found
return res.json({msg:'No token found, access denied'})
    }
    jwt.verify(token, jwtSecret,(err,decoded)=>{
        // If the token has expired
        if (err) {res.json({msg:'The token is not valid'})}
        req.user = decoded.user
        next()
    })
}