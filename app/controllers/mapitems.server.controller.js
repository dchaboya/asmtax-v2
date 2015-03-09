var mongoose = require('mongoose');
var MapItem = mongoose.model('MapItem');

var getErrorMessage = function(err) {
  if(err.errors) {
    for(var errName in err.erros) {
      if(err.errors[err.Name].message) return err.erros[errName].message;
    }
  } else {
    return 'Unknown server error';
  }
};

exports.list = function(req, res) {

  MapItem.find().exec(function(err, mapitems) {
    if(err) {
      return rest.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(mapitems);
    }
  });
};