var app = angular.module('myApp', []);
app.controller('controller', function($scope) {

	var image = {
		src : "../images/oneplace_logo.jpg",
		text : "One Place"
	};
	$scope.firstName = "Anudeep Kumar";
	$scope.lastName = "Donthu";
	$scope.image = image;

});