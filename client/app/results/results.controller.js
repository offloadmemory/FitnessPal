angular
	.module('results')
	.controller('ResultsController', resultsController);

resultsController.$inject = ['$scope','$http'];

function resultsController($scope, $http){
    var responsePromise = $http.get("/results");

    responsePromise.success(function(data, status, headers, config) {
        $scope.results = data;
    });
    responsePromise.error(function(data, status, headers, config) {
        console.log("Request failed!");
    });	
}	
