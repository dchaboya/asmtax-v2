// Prevents app from sleeping when deployed to Heroku.
//Set to ping site every 5 minutes.

var http = require('http');
var fs = require('fs');
var pingDate = Date.now();

exports.pingApp = function() {
  setInterval(function() {
    http.get('http://enigmatic-garden-6382.herokuapp.com');
    fs.writeFile('./app-ping.txt', 'enigmatic ping at ' + pingDate);
    console.log('enigmatic ping at ' + pingDate);
  }, 60000);
};