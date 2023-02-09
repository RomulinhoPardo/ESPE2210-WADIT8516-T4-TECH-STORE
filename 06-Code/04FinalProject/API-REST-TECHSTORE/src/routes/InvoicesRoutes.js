const express = require("express");
const Invoice = require("../models/invoice");

const router = express.Router();

// create invoice
router.post("/invoices", (req, res) => {
  const invoice = req.body;
  console.log(invoice);
  invoice.total = total(req.body.price, req.body.quantity);
  console.log(invoice);
  const invoices = Invoice(invoice);
  invoices
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all invoices/invoices
router.get("/invoices", (req, res) => {
  Invoice.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a invoices
router.get("/invoices/:id", (req, res) => {
  const { id } = req.params;
  Invoice.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a invoice
router.delete("/invoices/:id", (req, res) => {
  const { id } = req.params;
  Invoice.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a invoice
router.put("/invoices/:id", (req, res) => {
  const { id } = req.params;
  const newProduct = req.body;
  newProduct.total = total(req.body.price, req.body.quantity);
  Invoice.findByIdAndUpdate(id, newProduct)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Buisness Logic
const total = (price, quantity) => {
  const IVA = 0.12;
  return price * quantity * (1 + IVA);
};

module.exports = router;
