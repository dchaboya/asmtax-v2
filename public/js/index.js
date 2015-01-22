var AmCharts = require('ammap');
AmCharts.maps.worldLow = require('./worldLow.proxy');

var map = AmCharts.makeChart("chartdiv", {

  "type": "map",
    "theme": "none",
    "pathToImages": "http://www.amcharts.com/lib/3/images/",

  "dataProvider": {
     "map": "worldLow",
    "getAreasFromMap": true
  },
  "areasSettings": {
    "autoZoom": true,
    "selectedColor": "#CC0000"
  }
});