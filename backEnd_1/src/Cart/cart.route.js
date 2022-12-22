const express = require("express");
const app = express.Router();
const Cart = require("./cart.model");
app.get("/:email", async (req, res) => {
  const { email } = req.params;
  try {
    let userCart = await Cart.find({ email });
    res.send(userCart);
  } catch (e) {
    res.send(e.message);
  }
});

app.post("/", async (req, res) => {
  const { email, data } = req.body;
  try {
    let userCart = await Cart.find({ email });
    console.log(userCart);
    if (userCart.length > 0) {
      let check = userCart[0].data.filter((pro) => pro.title === data.title);

      if (check.length > 0) {
        let sameProduct = userCart[0].data.map((product) => {
          if (product.title === data.title) {
            product.count = Number(product.count) + 1;
          }
          return product;
        });

        let updated = await Cart.updateOne(
          { email: email },
          { $set: { data: sameProduct } }
        );
        let userCart1 = await Cart.find();
        return res.send(userCart1);
      } else {
        let updated = await Cart.updateOne(
          { email: email },
          { $set: { data: [...userCart[0].data, data] } }
        );
        let userCart1 = await Cart.find();
        return res.send(userCart1);
      }
    } else {
      data.count = 1;
      let updated = await Cart.create({
        ...req.body,
      });
      console.log(updated);
      return res.send(updated);
    }
  } catch (e) {
    res.send(`${e.message}`);
  }
});
app.post("/del", async (req, res) => {
  const { email, data } = req.body;
  console.log(data);
  console.log(email);
  try {
    let userCart = await Cart.find({ email });

    if (userCart.length > 0) {
      let check = userCart[0].data.filter((pro) => pro.title === data.title);

      if (check.length > 0) {
        let sameProduct = userCart[0].data.map((product) => {
          if (product.title === data.title) {
            product.count = Number(product.count) - 1;
          }
          return product;
        });
        console.log(sameProduct);
        let updated = await Cart.updateOne(
          { email: email },
          { $set: { data: sameProduct } }
        );
        let userCart1 = await Cart.find();
        return res.send(userCart1);
      } else {
        let updated = await Cart.updateOne(
          { email: email },
          { $set: { data: [...userCart[0].data, data] } }
        );
        let userCart1 = await Cart.find();
        return res.send(userCart1);
      }
    } else {
      data.count = 1;
      let updated = await Cart.create({
        ...req.body,
      });
      console.log(updated);
      return res.send(updated);
    }
  } catch (e) {
    res.send(`${e.message}`);
  }
});

module.exports = app;
