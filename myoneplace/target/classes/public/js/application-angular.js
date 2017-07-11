// Author Anudeep Kumar Donthu 
(function() {
	var control = function($scope, $log) {
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
		$log.info("Image Loaded at path :" + $scope.image.src);
	};
	app.controller('controller', control);
	app.controller('signupcontroller', [ "$scope", "$log", control ]);
}());
