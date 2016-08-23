angular
	.module('about')
	.controller('AboutController', aboutController);

aboutController.$inject = ['$scope','$http'];

function aboutController($scope, $http){
    var responsePromise = $http.get("/about");
    responsePromise.success(function(data, status, headers, config) {
        $scope.about = data;
    });
    responsePromise.error(function(data, status, headers, config) {
        console.log("Request failed!");
    });	
}	
