var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MapItemSchema = new Schema({

  id: {
    type: String,
    default: '',
    required: 'ID cannot be blank.  Refer to http://www.amcharts.com/lib/3/maps/js/worldLow.js and search country name for ID.'
  },
  country: {
    type: String,
    default: '',
    required: 'Country name cannot be blank.  Refer to http://www.amcharts.com/lib/3/maps/js/worldLow.js and search country name.'
  },
  gdps: Number,
  rr: Number,
  dpr: {
    type: String,
    default: '',
  },
  et: Number,
  det: {
    type: String,
    default: '',
  },
  source: [String],
  flagImg: {
    type: String,
    default: '',
  }
});

mongoose.model('MapItem', MapItemSchema);