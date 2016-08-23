angular.module('gallery',[])

.config(['$routeProvider', function ($routeProvider) {
     $routeProvider.when("/gallery", {
		templateUrl: "app/gallery/gallery.tpl.html", 
		controller: "GalleryController"
	 }); 
}]);