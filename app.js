var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Taco de kick!');
});

var server = app.listen((process.env.PORT || '3000').replace('unix:',''));
