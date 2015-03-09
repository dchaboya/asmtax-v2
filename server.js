process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 3000;

var mongoose = require('./config/mongoose');
var express = require('./config/express');
// var express = require('./config/passport');
var herokuping = require('./config/heroku-ping');

//Initialize app
var db = mongoose();
var app = express();

//Keep Heroku from falling asleep
herokuping.pingApp();

app.listen(port, function () {
  console.log('listening on port ' + port);
});

module.exports = app;
