var express = require('express');

var app = express();

// noheva kommentti
app.get('/', function (req, res) {
  res.send('Kukkerpalli!!!');
});

var server = app.listen((process.env.PORT || '3000').replace('unix:',''));
