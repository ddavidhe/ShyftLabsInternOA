const express = require("express");
const app = express();
const cors = require("cors");

// Use JSON and encode URLs
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//CORS
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const studentController = require("./studentsController.js");
app.use("/students", studentController);

const courseController = require("./coursesController.js");
app.use("/courses", courseController);

const resultsController = require("./resultsController.js");
app.use("/results", resultsController);

app.get("/health", (req, res) => {
  res.json({ status: 200, message: "HEALTHY" });
});

// error handling route not found
app.use((req, res) => {
  res.status(404).json({ status: 404, message: "Route was not found" });
});

// error handing custom
app.use((err, req, res, next) => {
  let errorCode = err.status || 500;
  let errorMessage = err.message || "There was an issue";

  res.status(404).json({ status: errorCode, message: errorMessage });
});

// Run server
const port = 3000;
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});

module.exports = app;
