const express = require('express');
const app = express();
var pairs = {};

app.get('/', function (req, res) {
  res.send('Hello, world!');
});

app.get('/set', function (req, res) {
  for(var key in req.query) {
    pairs[key] = req.query[key];
  }
  res.redirect('/');
});

app.get('/get', function (req, res) {
  for(var key in req.query) {
    if (typeof pairs[key] === 'string') {
      res.send(pairs[key]);
    }
  }
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});

module.exports = { 
  app: app,
  pairs: pairs };
