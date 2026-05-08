const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const adminAuth = require("../middleware/adminAuth");
const redisClient = require("../utils/redis");

const CACHE_KEY = "all_products";

// GET products
router.get("/", async (req, res) => {
  try {

    const cachedProducts = await redisClient.get(CACHE_KEY);
    if (cachedProducts) {
      console.log("Serving from cache");
      return res.json(JSON.parse(cachedProducts));
    }


    const products = await Product.find();

    await redisClient.set(CACHE_KEY, JSON.stringify(products));

    console.log("Serving from DB");
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    const products = await Product.find();
    res.json(products);
  }
});


router.post("/", adminAuth, async (req, res) => {
  const product = new Product(req.body);
  await product.save();


  await redisClient.del(CACHE_KEY);

  res.json(product);
});


router.put("/:id", adminAuth, async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );


  await redisClient.del(CACHE_KEY);

  res.json(product);
});

router.delete("/:id", adminAuth, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);


  await redisClient.del(CACHE_KEY);

  res.json({ message: "Deleted successfully" });
});

module.exports = router;