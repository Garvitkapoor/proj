// File: backend/server.js
const express = require("express");
const cors = require("cors");
const dashboardRoute = require("./routes/dashboard");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api", dashboardRoute);

app.get("/", (req, res) => {
  res.send("Military Asset Management API Running");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));