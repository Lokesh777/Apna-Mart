const express = require("express");
const app = express.Router();
const Auth = require("./auth.model");




// app.get("/" , async (req,res) =>{
    
//     try{
//         let data = await Auth.find({}, {password:0, email : 0 });
//         console.log(data);
//         res.send(data);

//     } catch (e) {
//         res.send(e.message)
//     }
// })

app.post("/signup", async (req, res) =>{
    const {email,  password, name} = req.body;

    try{
        let user = await Auth.find({email});
        if(user.length>0){
            return res.send("This Email Already used Please Use Different Email ID");
        } else {
            let newUser = await Auth.create({
                ...req.body
            });
            return res.send(newUser);
        }
    } catch (e) {
        res.send("Please Fill All Credendtials");
    }
})

app.post("/login", async (req, res) =>{
    const {email,  password} = req.body;

    try{
        let user = await Auth.findOne({email});
        if(user){
            if(user.password === password){
              return  res.send(email);
            } else{
              return  res.send("Wrong Password!!")
            }
           
        } else {
         return   res.send("User Does not Exist")
        }
    } catch (e) {
        res.send(e.message);
    }
})

module.exports = app;