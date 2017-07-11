//(function() {
var app = angular.module('myApp', [ "ngRoute" ]);
app.config(function($routeProvider) {
	$routeProvider.when("/home", {
		templateUrl : "../html/AppHome.html",
		controller : "controller"
	}).otherwise({
		redirectTo : "/home"
	});
});

// }());
