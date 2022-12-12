const express = require("express");
const productsSchema = require("../models/products");

const router = express.Router();

// create products
router.post("/products", (req, res) => {
  const products = productsSchema(req.body);
  products
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all products
router.get("/products", (req, res) => {
  productsSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a product
router.get("/products/:id", (req, res) => {
  const { id } = req.params;
  productsSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a products
router.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  productsSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a products
router.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { ID_product, name_product, description, price, quantity } = req.body;
  customerSchema
    .updateOne({ _id: id }, { $set: { ID_product, name_product, description, price, quantity } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;