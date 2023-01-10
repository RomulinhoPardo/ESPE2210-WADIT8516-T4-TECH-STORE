const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: Number,
    required: true
},
address: {
  type: String,
  required: true

},
  email: {
    type: String,
    required: true

  }
});

module.exports = mongoose.model('customer', customerSchema);