var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService) {

	var getUsers = function() {
		
		//$scope.users = mainService.getUsers();
		//$scope.page = 3;
		mainService.getUsers().then(function(data) {
			$scope.users = data;
			console.log($scope.users);
		});//better to use because then the mainService will get what it needs THEN load into the page

	}

	getUsers();
	//getData();
	

});