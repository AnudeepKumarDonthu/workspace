var app = angular.module('myApp', []);
var commonController=app.controller('controller', function($scope) {
	var image = {
		src : "../images/oneplace_logo.jpg",
		text : "One Place"
	};
	$scope.image = image;
});

app.controller('signupcontroller', function($scope) {
	var image = {
		src : "../images/oneplace_logo.jpg",
		text : "One Place"
	};
	$scope.image = image;
});
