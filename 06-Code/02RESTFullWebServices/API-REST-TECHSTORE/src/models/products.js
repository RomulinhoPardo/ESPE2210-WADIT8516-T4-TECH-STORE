const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
    ID_product: {
        type: Number,
        required: true,
      },
  name_product: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
},
price: {
  type: Number,
  required: true

},
  quantity: {
    type: Number,
    required: true
}
});

module.exports = mongoose.model('products', customerSchema);