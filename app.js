const express = require("express");
const axios = require("axios");
const app = express();

app.set("view engine", "pug");

/* app.get("/", (req, res) => {
  res.send("Hello, World from Pug!");
}); */

/* app.get("/", (req, res) => {
  res.render("index");
}); */

app.get("/", async (req, res) => {
  const query = await axios.get("http://localhost:3001/results");
  res.render("index", { employees: query.data });
});

// Server connection
const port = process.env.PORT||3000;
app.listen(port, () => console.log(`Express Server listening on port ${port}`));
