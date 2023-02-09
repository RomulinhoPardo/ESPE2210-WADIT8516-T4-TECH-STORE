const express = require("express");
const Product = require("../models/products");

const router = express.Router();

// create products
router.post("/products", (req, res) => {
  const products = Product(req.body);
  products
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all products
router.get("/products", (req, res) => {
  Product.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a product
router.get("/products/:id", (req, res) => {
  const { id } = req.params;
  Product.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a products
router.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  Product.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a products
router.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const newProduct = req.body;
  Product.findByIdAndUpdate(id, newProduct)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
