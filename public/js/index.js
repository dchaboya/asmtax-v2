var app = angular.module('app', ['ngResource', 'ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MapCtrl'
  })

  .when('/country', {

    templateUrl: 'views/country.html',
    controller: 'CountryCtrl'

  })

});

//SERVICES
app.service('MapDataService', ['$http', function($http){
  
  this.promise = {};

  this.initCountries = function () {
    this.promise = $http.get('/api/mapitems');
  };

  this.getCountries = function() {
    return this.promise;
  };

}]);

app.controller('MapDataCtrl', ['$scope', 'MapDataService', function($scope, MapDataService) {
  MapDataService.initCountries();
  MapDataService.getCountries().then(function(result) {
    $scope.countryNames = result.data;
    console.log($scope.countryNames);
  });
}]);

app.controller('MapCtrl', ['$scope', function($scope) {

  $scope.map = AmCharts.makeChart("chartdiv", {
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

}]);

app.controller('CountryCtrl', ['$scope', function($scope) {
  alert("working!!");

}]);
  
