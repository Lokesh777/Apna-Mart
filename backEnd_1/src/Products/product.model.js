const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  a: { type: String },
});
const Product = mongoose.model("admin", ProductSchema);

module.exports = Product;
