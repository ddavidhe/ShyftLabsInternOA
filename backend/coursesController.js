const express = require("express");
const router = express.Router();
let data = require("./courses");

// GET
router.get("/", (req, res) => {
  console.log("GET /courses");
  console.log(data);
  res.status(200).json(data);
});

// POST
router.post("/", (req, res) => {
  console.log("POST /courses");
  data.push(req.body);
  res.status(200).json(data);
});

module.exports = router;
