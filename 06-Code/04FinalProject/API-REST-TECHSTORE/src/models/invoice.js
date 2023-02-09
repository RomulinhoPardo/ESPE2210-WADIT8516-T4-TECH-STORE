const mongoose = require("mongoose");

const invoicesSchema = mongoose.Schema(
  {
    product: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
    },
  },

  {
    collection: "invoices",
  }
);

module.exports = Invoice = mongoose.model("invoices", invoicesSchema);
