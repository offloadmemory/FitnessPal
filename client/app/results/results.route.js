angular.module('results',[])

.config(['$routeProvider', function ($routeProvider) {
     $routeProvider.when("/results", {
		templateUrl: "app/results/results.tpl.html", 
		controller: "ResultsController"
	 }); 
}]);