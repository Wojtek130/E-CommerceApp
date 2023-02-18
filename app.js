require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
var whitelist = ["http://localhost:3000", "http://localhost:3001"];

var corsOptions = {
  credentials: "include",
  exposedHeaders: [
    "content-length",
    "authorization",
    "content-type",
    "set-cookie",
  ],
};
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));
app.use('/assets',express.static(path.resolve(__dirname, "../greengrocers/assets"))); 

module.exports = app;
