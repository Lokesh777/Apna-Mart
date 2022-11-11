const mongoose = require("mongoose");


// const ProductScema = new mongoose.Schema({
    
//     category_name : {type : String, required : true},
//     image : {type : String, required : true},
//     title : {type : String, required : true},
//     price : {type : Number},
//     button  : {type : String}
// });
const ProductSchema = new mongoose.Schema({
    a : {type : String}
})
const Product = mongoose.model("admin", ProductSchema);

module.exports = Product;