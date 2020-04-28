// require express
const express = require('express')
// Connection to DB
const ConnectDB = require('./config/Connection')
ConnectDB()
// invoque express
const app = express()
// Init middleware to parse body
app.use(express.json())
// Define routes
app.use('/api/user', require('./routes/users'))
app.use('/api/auth',require('./routes/auth'))
// Generate Server 
app.listen(5000, (err) => {
    if (err) throw err
    else console.log('The Server is running on port 5000')
})
