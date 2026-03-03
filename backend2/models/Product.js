const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  oldPrice: String,
  age: String,
  category: String,
  label: String,
  badge: String,
  badgeColor: String,
  badgeText: String,
  imageUrl: String,
  bg: String
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);