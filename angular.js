angular.module('myApp', [])
	.controller('MockController', ['$scope', function($scope) {
		$scope.notifications = [
			{
				title: "Project Created"
			},
			{
				title: "Labor Forcast Generated"
			}
		];
	}])
	.directive('notification', function() {
	  return {
	  	restrict: 'E',
	  	scope: {
	  		info: '=',
	  	},
	    templateUrl: "notification.html"
	  };
	});
