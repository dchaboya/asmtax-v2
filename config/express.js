process.env.PWD = process.cwd();
var config = require('./config');
var express = require('express');
var morgan = require('morgan');
var compress = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('passport');
var path = require('path');

module.exports = function() {
  
  //initialize express app
  var app = express();

  if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  } else if(process.env.NODE_ENV === 'production') {
    app.use(compress());
  }

  app.use(bodyParser.urlencoded({extended:true}));

  app.use(bodyParser.json());
  app.use(methodOverride());

  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret
  }));

  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  //include ...
  // flash
  // passport.initialize
  // passport.session

  require('../app/routes/index.server.routes.js')(app);
  require('../app/routes/about.server.routes.js')(app);

  app.use(express.static(path.join(process.env.PWD, 'public')));

  var mes = function() {
    console.log(require('fs').existsSync(process.env.PWD + '/public'));
};

mes();

  return app;

};