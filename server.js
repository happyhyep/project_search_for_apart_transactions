const express = require('express');
const path = require('path');
const convert = require('xml-js');
const request = require('request');
const xml2js = require('xml2js');
const bodyParser = require('body-parser');
const route = require('./routes/app');


//var ejs = require("ejs");

let app = express();

//app.set("views", __dirname + "/views");     
//app.set("view engine", "ejs");
//app.engine("html", ejs.renderFile);
//app.use(express.static("public"));


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', route); // http://localhost:8080/ 주소로 들어갔을 때 app.js를 실행

app.listen(8080, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('listen:8080');
  }
});