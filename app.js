const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
require("./config/db");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

module.exports = app;