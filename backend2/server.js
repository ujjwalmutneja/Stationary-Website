require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const announcementRoutes = require("./routes/announcement");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/upload", require("./routes/uploadRoutes"));

app.use("/api/announcement", announcementRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));