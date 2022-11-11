const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
    name : {type : String, require:true},
    email : {type : String, require: true,unique:true},
    password : {type : String, require: true},
    age : {type : Number, require: true},
    gender : {type : String, require: true},
})
const Auth = mongoose.model("user-login", AuthSchema);

module.exports = Auth;