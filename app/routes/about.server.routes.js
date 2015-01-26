module.exports = function(app) {
  var about = require('../controllers/about.server.controller.js');
  app.get('/about', about.render);
};
