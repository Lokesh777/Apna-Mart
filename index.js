require("dotenv").config();
const express = require("express");

const cors = require("cors");

const PORT =  process.env.PORT || 8080;
 const connect = require("./backEnd_1/src/config/db");

const productRoute = require("./backEnd_1/src/Products/product.route");
const authRoute = require("./backEnd_1/src/authenticationB/auth.route.js");
const cartRoute = require("./backEnd_1/src/Cart/cart.route")
const app = express();

app.use(express.json());
app.use(cors());
app.use("/products", productRoute);
app.use("/auth", authRoute);
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

