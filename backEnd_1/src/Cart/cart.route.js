const express = require("express");

const app = express.Router();
const Cart = require("./cart.model");




app.get("/:email" , async (req,res) =>{
     const {email} = req.params;

    try{
        let userCart = await Cart.find({email});
        
      
        res.send(userCart);

    } catch (e) {
        res.send(e.message)
    }
})

app.post("/", async (req, res) =>{
    const {email, data} = req.body;
    console.log(data)
      console.log(email)
    try{
        let userCart = await Cart.find({email});
       
         if(userCart.length>0){
           
         let updated = await Cart.updateOne(
            {email : email} , {$set : {data : [...userCart[0].data,data]}}
            );
            let userCart1 = await Cart.find({email});
         return res.send(userCart1);
        
    //    let a = userCart[0].data;
    //     return res.send(a)
         }
         else{
            let updated = await Cart.create({
              ...req.body
            });
            console.log(updated)
            return res.send(updated);
        }

        // if(user.length>0){
        //     return res.send("This Email Already used Please Use Different Email ID");
        // } else {
            
            // let updated = await Cart.create({
            //     email : email,
            //     data : [...userCart.data, data]
            // });
            
        // }
    } catch (e) {
        res.send(`${e.message}`);
    }
})



module.exports = app;