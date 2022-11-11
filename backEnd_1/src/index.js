require("dotenv").config();
const express = require("express");

const cors = require("cors");

const PORT =  process.env.PORT || 8080;
 const connect = require("./config/db");

const productRoute = require("./Products/product.route");
const authRoute = require("./authenticationB/auth.route.js");
const cartRoute = require("./Cart/cart.route")
const app = express();

app.use(express.json());
app.use(cors());
app.use("/products", productRoute);
app.use("/authUser", authRoute);
app.use("/cart", cartRoute);

// app.get("/", (req,res) =>{
//     let a = [{a:"viv"}]
//     res.send(a)
// })

app.listen(PORT, async () =>{
    try{
        await connect();
    } catch (e){
         console.log(e);
    }
    
    console.log(`listening http://localhost:${PORT}`)
});

