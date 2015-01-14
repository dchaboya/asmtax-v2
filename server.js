process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 3000;
// var mongoose = require('./config/mongoose');
var express = require('./config/express');
// var express = require('./config/passport');

var app = express();


app.listen(port, function() {
  console.log('lising on port' + port);
});

module.exports = app;