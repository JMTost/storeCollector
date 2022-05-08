const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
var path = require("path");
var logger = require("morgan");
const cors = require("cors");

var indexRouter = require("./routes/index");

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
module.exports = app;