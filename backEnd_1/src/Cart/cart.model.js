const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
   
    email : {type : String, require: true,unique:true},
    data : {type : Array, require : true}
})
const Cart = mongoose.model("user", CartSchema);

module.exports = Cart;