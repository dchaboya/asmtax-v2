var MapItem = require('../../app/controllers/mapitems.server.controller');

module.exports = function(app) {
  app.route('/api/mapitems') 
    .get(MapItem.list);
};