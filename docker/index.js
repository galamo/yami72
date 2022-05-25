const express = require("express");

const port = 4500;

const app = express();

app.get("/docker", (req, res, next) => {
  res.send("working  api!!!");
});

app.listen(port);
