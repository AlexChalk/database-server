const express = require('express');
const app = express();

// This variable will be replaced by the db.
var pairs = {};

app.get('/', function (req, res) {
  res.send('The in-memory data storage app.');
});

app.get('/set', function (req, res) {
  for(var key in req.query) {
    pairs[key] = req.query[key];
  }
  res.end();
});

app.get('/get', function (req, res) {
  if (typeof req.query['key'] === 'string') {
    res.send(pairs[req.query['key']]);
  } 
  res.end();
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});

module.exports = { 
  app: app,
  pairs: pairs };
