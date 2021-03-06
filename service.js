var app = angular.module('userProfiles');

app.service('mainService', function($http) {

	/*var userData = [{
		    "id": 1,
		    "first_name": "george",
		    "last_name": "bluth",
		    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
		},
		{
		    "id": 2,
		    "first_name": "lucille",
		    "last_name": "bluth",
		    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
		},
		{
		    "id": 3,
		    "first_name": "oscar",
		    "last_name": "bluth",
		    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
		}];

	this.getUsers = function() {
		return userData;
	}*/

	//heres another way to load data, using $http


	this.getUsers = function() {
		return $http({
			method: 'GET',
			url: 'http://reqr.es/api/users'
		}).then(function(res){//res means response
			return res.data.data;
		});
	}

});