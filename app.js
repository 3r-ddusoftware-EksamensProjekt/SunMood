const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const data = require("./routes/data.js"); // Load js to insert and get data from db

// express()
//     .use(express.static(path.join(__dirname, "public")))        // Make files in public folder available
//     .use("/data", data)                                         // Use instructions in data.js at url: <your-app-name>.herokuapp.com/data
//     .listen(PORT, () => console.log(`Listening on ${PORT}`));   // Start server

express()
  .set("view engine", "ejs")
  .set("views", path.join(__dirname, "views"))
  .use(express.static(path.join(__dirname, "public")))
  .use("/data", data) // Use instructions in data.js at url: <your-app-name>.herokuapp.com/data
  .get("/", (req, res) => res.render("pages/startSide.ejs"))
  .get("/startSide", (req, res) => res.render("pages/startSide.ejs"))
  .get("/sunMood", (req, res) => res.render("pages/sunMood.ejs"))

  .listen(PORT, () => console.log(`Listening on ${PORT}`));
