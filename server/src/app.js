const path = require("path");
const express = require('express');
const fs = require("fs");
const cors = require("cors");
const morgan = require("morgan");

const api = require("./routes/api");

const app = express();

let accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});

// cross origin setup
app.use(cors({ origin: "http://localhost:3000" }));
// Log requests in access log
app.use(morgan("combined", { stream: accessLogStream }));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use('/v1', api)

//Serve frontend/client files
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
