const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  image: { type: String },
  title: { type: String },
  category: { type: String,required : true },
  price: { type: Number },
});
const Product = mongoose.model("admin", ProductSchema);

module.exports = Product;
