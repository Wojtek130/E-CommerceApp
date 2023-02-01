require("dotenv").config();
const express = require("express");
const cors = require('cors');
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "../greengrocers/assets")));

module.exports = app;