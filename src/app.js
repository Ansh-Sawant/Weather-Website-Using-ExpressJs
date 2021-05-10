const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;

// public static path
const static_path = path.join(__dirname, "../public");

app.use(express.static(static_path));

app.get("", (req, res) => {
  res.send("Welcome");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/weather", (req, res) => {
  res.send("Weather Page");
});

app.get("*", (req, res) => {
  res.send("404 error page oops");
});

app.listen(port, () => {
  console.log(`listening to the port at ${port}`);
});
