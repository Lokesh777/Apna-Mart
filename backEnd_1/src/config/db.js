require("dotenv").config();

const mongoose = require("mongoose");

const connect = async () =>{
    return mongoose.connect("mongodb+srv://VivBelwal:ptani@cluster0.i7zfzqx.mongodb.net/apna-mart?retryWrites=true&w=majority");
}

module.exports = connect;