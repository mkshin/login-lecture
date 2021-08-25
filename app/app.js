"use strictt";

// 모듈
const express = require("express");
//const bodyParser = require("body-parser");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
//URL을 통해 전달되는 데이터
app.use(express.urlencoded({ extended: true}));

app.use("/", home); // use => 미들웨어 등록해 주는 메서드

module.exports = app;
