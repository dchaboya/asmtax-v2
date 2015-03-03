var popupOverlay = require('jquery-popup-overlay');
var AmCharts = require('ammap');
AmCharts.maps.worldLow = require('./worldLow.proxy');

//map
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

$(document).ready(function() {

      // Initialize the plugin
      $('#data_popup').popup({
        transition: 'all 0.3s',
        color: '#fff',
        opacity: 0.9
      });

    });