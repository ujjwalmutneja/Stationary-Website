const express = require("express");
const router = express.Router();
const multer = require("multer");
const cloudinary = require("../config/cloudinary");
const adminAuth = require("../middleware/adminAuth");

// Multer setup (memory storage)
const storage = multer.memoryStorage();
const upload = multer({ storage });

/*
=========================================
1️⃣ Upload Local File
POST /api/upload/file?secret=...
=========================================
*/

router.post("/file", adminAuth, upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload_stream(
      {
        folder: "naresh_store",
      },
      (error, result) => {
        if (error) return res.status(500).json({ message: error.message });
        res.json({ imageUrl: result.secure_url });
      }
    );

    result.end(req.file.buffer);

  } catch (err) {
    res.status(500).json({ message: "Upload failed" });
  }
});


/*
=========================================
2️⃣ Upload From Image URL
POST /api/upload/url?secret=...
=========================================
*/

router.post("/url", adminAuth, async (req, res) => {
  try {
    const { imageUrl } = req.body;

    const result = await cloudinary.uploader.upload(imageUrl, {
      folder: "naresh_store",
    });

    res.json({ imageUrl: result.secure_url });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;