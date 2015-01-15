global.AmCharts = { maps: {} };
require('ammapWorld');
var worldLow = global.AmCharts.maps.worldLow;
delete global.AmCharts;
module.exports = worldLow;
