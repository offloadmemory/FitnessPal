angular
	.module('home')
	.controller('HomeController', homeController);

homeController.$inject = ['$scope','$interval', 'HomeService'];

function homeController($scope, $interval, HomeService){
    $scope.quote = HomeService.get(0);
    var i=0;
    var timer = $interval(function(){
        $scope.quote=HomeService.get(i);
        if(i>=HomeService.all().length-1) i=-1;
        i++;
    },5000);	
}


