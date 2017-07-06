// Author Anudeep Kumar Donthu 
(function() {
	var app = angular.module('myApp', []);
	var control = function($scope) {
		var image = {
			src : "../images/oneplace_logo.jpg",
			text : "One Place"
		};
		var error = function(reason) {
			$scope.error = "invalid input";
		};
		var onUserComplete = function(response) {
			$scope.login = response.data;

		};
		var loginCheck = function() {
			$window.alert($scope.userName + "  ::  " + $scope.password);

		};

		$scope.image = image;
	};
	app.controller('controller', [ "$scope", control ]);
	app.controller('signupcontroller', [ "$scope", control ]);
}());
