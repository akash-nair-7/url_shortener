const express = require("express");
const cors = require("cors");
const urlRoutes = require("./routes/urlRoutes");

const app = express();
app.use(cors({
  origin: "http://localhost:3001"
}));
app.use(express.json());

// All API routes under /api
app.use("/api", urlRoutes);

module.exports = app;
