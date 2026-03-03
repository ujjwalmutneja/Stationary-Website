const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const sendEmail = require("../utils/sendEmail");

// CREATE CONTACT MESSAGE
router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();

    // Send Email
    const htmlContent = `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${contact.name}</p>
      <p><strong>Phone:</strong> ${contact.phone}</p>
      <p><strong>Email:</strong> ${contact.email}</p>
      <p><strong>Message:</strong> ${contact.message}</p>
    `;

    await sendEmail(
      `New Message from ${contact.name}`,
      htmlContent
    );

    res.json(contact);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET ALL MESSAGES (Admin Protected)
const adminAuth = require("../middleware/adminAuth");

router.get("/", adminAuth, async (req, res) => {
  const messages = await Contact.find();
  res.json(messages);
});

module.exports = router;