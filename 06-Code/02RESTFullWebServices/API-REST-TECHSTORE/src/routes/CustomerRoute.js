const express = require("express");
const customerSchema = require("../models/customer");

const router = express.Router();

// create customer
router.post("/customer", (req, res) => {
  const customer = customerSchema(req.body);
  customer
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all customers
router.get("/customer", (req, res) => {
  customerSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a customer
router.get("/customers/:id", (req, res) => {
  const { id } = req.params;
  customerSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a customer
router.delete("/customer/:id", (req, res) => {
  const { id } = req.params;
  customerSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/customer/:id", (req, res) => {
  const { id } = req.params;
  const { name, lastname, address, email } = req.body;
  customerSchema
    .updateOne({ _id: id }, { $set: { name, lastname,address, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;