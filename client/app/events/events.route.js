angular.module('events',[])

.config(['$routeProvider', function ($routeProvider) {
     $routeProvider.when("/events", {
		templateUrl: "app/events/events.tpl.html", 
		controller: "EventsController"
	 }); 
}]);