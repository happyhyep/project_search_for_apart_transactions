require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const route = require('./routes/app');


let app = express();


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require("dotenv").config();

app.use('/', route);

app.listen(8080, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('listen:8080');
  }
});