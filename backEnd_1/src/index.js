require("dotenv").config();
const express = require("express");

const cors = require("cors");

const PORT = 8080;
// const connect = require("./config/db");

const productRoute = require("./Products/product.route")
const app = express();

app.use(express.json());
app.use(cors());
app.use("/products", productRoute);

app.listen(PORT, () =>{
    //await connect();
    console.log("Listeing ...")
});

