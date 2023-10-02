const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let newsRoutes = require("./routes/news");

app.use("/news", newsRoutes);

module.exports = app;
