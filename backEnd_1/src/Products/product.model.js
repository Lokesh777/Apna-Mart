const mongoose = require("mongoose");


const ProductScema = new mongoose.Schema({
    id : Number,
    title : {type : String, required : true},

})

const Product = mongoose.model("product", ProductScema);

module.exports = Product;