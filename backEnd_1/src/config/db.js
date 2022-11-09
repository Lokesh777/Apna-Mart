const mongoose = require("mongoose");

const connect = async () =>{
    return mongoose.connect()
}

module.exports = connect;