const express = require("express");
const Product = require("./product.model");

const app = express.Router();

app.get("/", async (req, res) => {
    
   
    try{
        let products = await Product.find();
       
      
            let obj=products[0];
          
         res.send(obj)
       
       
       
    
    }
    catch(e){
        console.log(e)
    }
    
})

app.get("/:data", async (req, res) => {
    let data = req.params.data;
    console.log(data);
    // const {name} = req.params;
    try{
        let products = await Product.find();
       
        if(data === "fruit"){
            let obj=products[0];
          
         res.send(obj)
        } else if(data === "freshFruis"){
            let obj=products[1];
          
            res.send(obj)
        } else if(data === "premiumFruits"){
            let obj=products[2];
          
            res.send(obj)
        } else{
            res.send("Product not available..")
        }
       
       
    
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