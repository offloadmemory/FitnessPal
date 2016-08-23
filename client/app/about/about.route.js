angular.module('about',[])

.config(['$routeProvider', function ($routeProvider) {
     $routeProvider.when("/about", {
		templateUrl: "app/about/about.tpl.html", 
		controller: "AboutController"
	 }); 
}]);