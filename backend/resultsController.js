const express = require("express");
const router = express.Router();
let data = require("./results");

// GET
router.get("/", (req, res) => {
  console.log("GET /results");
  console.log(data);
  res.status(200).json(data);
});

// POST
router.post("/", (req, res) => {
  console.log("POST /results");
  data.push(req.body);
  res.status(200).json(data);
});

module.exports = router;
