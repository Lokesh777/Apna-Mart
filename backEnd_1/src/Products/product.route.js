const express = require("express");
const Product = require("./product.model");

const app = express.Router();

app.get("/", async (req, res) => {

  const {q,type,price} = req.query;
  try {
    if(!q && !type && !price){
      let products = await Product.find();

      let obj = products[3];
  
      return res.send(obj);
    }

    if(q){
      console.log(q);
      const product = await Product.find({ $or: [{ title:{ "$regex" : q, "$options" : "i"} }] });

      
     if(product){
      return res.status(201).send(product);
     } else {
      return res.send("Bad Request");
     }
    }

    if(type && price){
      console.log(price)
      if(price === "asc"){
     const product = await Product.find({category : type}).sort ({price : 1});
     return res.send(product);
      } else if(price === "dsc"){
        const product = await Product.find({category : type}).sort({price : -1})
        return res.send(product);
      } else {
        return res.send("Bad Request !!")
      }
    }

    if(type){
      const product = await Product.find({category : type});
      return res.send(product);
    }
    
  } catch (e) {
    console.log(e);
  }
});

// app.get("/:data", async (req, res) => {
//   let data = req.params.data;
//   console.log(data);
//   try {
//     let products = await Product.find();

//     if (data === "fruit") {
//       let obj = products[0];

//       res.send(obj);
//     } else if (data === "freshFruis") {
//       let obj = products[1];

//       res.send(obj);
//     } else if (data === "premiumFruits") {
//       let obj = products[2];

//       res.send(obj);
//     } else {
//       res.send("Product not available..");
//     }
//   } catch (e) {
//     console.log(e);
//   }
// });

// app.get("/:id", async (req, res) => {
//   let id = req.params.id;

//   try {
//     let product = await Product.findById(id);
//     if (product) {
//       res.send(product);
//     } else {
//       res.send("User not found");
//     }
//   } catch (e) {
//     res.send(e.message);
//   }
// });

module.exports = app;
