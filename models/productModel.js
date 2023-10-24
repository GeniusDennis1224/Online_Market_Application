const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A product must have a name"],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    requied: [false],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "A product must have a price"],
  },
  quantity: {
    type: Number,
    required: [true, "A product must have a quantity"],
  },
  category: {
    type: String,
    required: [true, "A product must belong to a specific category"],
  },
});

//Create a model for the productSchema'
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
