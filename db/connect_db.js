const mongoose = require('mongoose')
const url = "mongodb://127.0.0.1:27017/admissionportal"
const live_url = 'mongodb+srv://puspendrajadon142:88888888@cluster1.18ufdxt.mongodb.net/admission?retryWrites=true&w=majority'

const connectDB=()=>{
    // For local DB
    return mongoose.connect(live_url)

    // For cloud DB
    // return mongoose.connect(database)
    
    .then(()=>{
        console.log("Connected Succeessfully")
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports=connectDB

