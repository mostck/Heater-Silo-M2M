var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.get('/api', function (req, res) {
  res.send('API is running');
});

app.listen(3000, function(){
  console.log('Express server listening on port 3000');
});