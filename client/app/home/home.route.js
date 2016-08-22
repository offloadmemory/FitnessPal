angular.module('home',[])

.config(['$routeProvider', function ($routeProvider) {
     $routeProvider.when("/", {
		templateUrl: "app/home/home.tpl.html", 
		controller: "HomeController"
	 }); 
}]);