// models/Announcement.js
const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema({
  title: String,
  message: String,
  expiryDate: Date,
  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Announcement", announcementSchema);