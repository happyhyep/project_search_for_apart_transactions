// server.js

var express = require('express')
var app = express()
var port = app.listen(process.env.PORT || 5050);

app.get('/', function(req, res) {
    res.send("<h1>Express server Start</h1>")
})

app.listen(port, function() {
    console.log('start! express server');
})
