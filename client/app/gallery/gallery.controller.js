angular
	.module('gallery')
	.controller('GalleryController', galleryController);

galleryController.$inject = ['$scope','$http'];

function galleryController($scope, $http){
    var responsePromise = $http.get("/photos");

    responsePromise.success(function(data, status, headers, config) {
        $scope.photos = data;
    });
    responsePromise.error(function(data, status, headers, config) {
        console.log("Request failed!");
    });	
}	
