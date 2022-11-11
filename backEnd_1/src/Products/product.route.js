const express = require("express");
const Product = require("./product.model");

const app = express.Router();

app.get("/", async (req, res) => {
    
    // const {name} = req.params;
    try{
        let products = await Product.find();
       
        res.send(products)
    }
    catch(e){
        console.log(e)
    }
    
})

app.get("/:id", async (req,res) =>{
    let id = req.params.id;

    try{
        let product = await Product.findById(id);
        if(product){
            res.send(product)
        } else {
            res.send("User not found")
        } 
    } catch (e) {
        res.send(e.message);
    }
});

module.exports = app;