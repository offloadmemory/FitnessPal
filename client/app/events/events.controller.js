angular
	.module('events')
	.controller('EventsController', eventsController);

eventsController.$inject = ['$scope','$http'];

function eventsController($scope, $http){
    var responsePromise = $http.get("/events");
    
    responsePromise.success(function(data, status, headers, config) {
        $scope.marathons = data;
    });
    responsePromise.error(function(data, status, headers, config) {
        console.log("Request failed!");
    }); 	
}	
