const fs = require("fs");
const express = require("express");
const app = express();

const port = 3000;

function handleFirstRequest(req, res) {
  res.send("Hello World");
}

app.get("/", handleFirstRequest);

function started() {
  console.log(`Example app listening on port ${port}`);
}
app.listen(port, started);
