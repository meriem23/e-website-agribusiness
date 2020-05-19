const mongoose = require('mongoose')

const mongoURL = "mongodb+srv://Admin:Admin@e-commerce-igpf5.mongodb.net/test?retryWrites=true&w=majority"

const ConnectDB = () => mongoose.connect(mongoURL,{ useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
    if (err) { throw err}
    else console.log('The Database is now Connected')
})
module.exports = ConnectDB