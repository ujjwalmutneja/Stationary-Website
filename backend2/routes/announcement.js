// routes/announcement.js
const express = require("express");
const router = express.Router();
const Announcement = require("../models/Announcement");

// Create or Update announcement
router.post("/create", async (req, res) => {
  const { title, message, expiryDate } = req.body;

  const announcement = await Announcement.create({
    title,
    message,
    expiryDate
  });

  res.json(announcement);
});

// Get active announcement
router.get("/active", async (req, res) => {
  const now = new Date();

  const announcement = await Announcement.findOne({
    isActive: true,
    expiryDate: { $gte: now }
  }).sort({ createdAt: -1 });

  res.json(announcement);
});


router.put("/update/:id", async (req, res) => {
  try {
    const announcement = await Announcement.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(announcement);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.put("/test/:id", (req, res) => {
  res.json({ working: true, id: req.params.id });
});

module.exports = router;