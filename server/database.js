const mongoose = require("mongoose")
const databaseConnection = ()=>{
    mongoose.connect("mongodb://localhost:27017/bookstore")
    .then(()=>{
        console.log("mongo DB connected successfully")
    })
    .catch((err)=>{
        console.log("connection error" , err)
    })
}

module.exports =  databaseConnection;