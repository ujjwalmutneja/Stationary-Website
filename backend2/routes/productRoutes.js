const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const adminAuth = require("../middleware/adminAuth");

// GET products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// ADD product
router.post("/", adminAuth, async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

// UPDATE product
router.put("/:id", adminAuth, async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(product);
});

// DELETE product
router.delete("/:id", adminAuth, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;