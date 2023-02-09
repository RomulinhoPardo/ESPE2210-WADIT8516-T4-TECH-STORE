const express = require("express");
const Customer = require("../models/customer");

const router = express.Router();

// create customer
router.post("/customers", (req, res) => {
  const customer = Customer(req.body);
  customer
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all customers
router.get("/customers", async (req, res) => {
  Customer.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a customer
router.get("/customers/:id", (req, res) => {
  const { id } = req.params;
  Customer.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a customer
router.delete("/customers/:id", (req, res) => {
  const { id } = req.params;
  Customer.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/customers/:id", (req, res) => {
  const { id } = req.params;
  const { name, lastname, address, email } = req.body;
  Customer.updateOne({ _id: id }, { $set: { name, lastname, address, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
