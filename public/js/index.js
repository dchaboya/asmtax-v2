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

app.service("CountryService", function() {

  this.country = {};

});


app.controller('MapDataCtrl', ['$scope', 'MapDataService', 'CountryService', function($scope, MapDataService, CountryService) {
  MapDataService.initCountries();
  MapDataService.getCountries().then(function(result) {
    $scope.countryNames = result.data;
  });

  $scope.country = {};

  $scope.setCountry = function(country) {
    $scope.country = country;

    // if($scope.country.et === undefined) {
    //   $scope.country.et = "N/A";
    // };

    console.log("changing scope.country to: " + JSON.stringify($scope.country));
  }; 

  $scope.$watch('country', function() {

    CountryService.country = $scope.country
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

app.controller('CountryCtrl', ['$scope', 'CountryService', function($scope, CountryService) {

  $scope.country = CountryService.country;
  console.log($scope.country.source);

}]);
   
