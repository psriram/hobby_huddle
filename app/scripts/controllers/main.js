'use strict';

/**
 * @ngdoc function
 * @name hobbyhuddleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hobbyhuddleApp
 */
 angular.module('hobbyhuddleApp').controller('appCtrl', ['$scope', '$location', function ($scope, $location) {

	    $scope.go = function ( path ) {

	  		$location.path( path );

		};

	}]);
  angular.module('hobbyhuddleApp').controller('MainCtrl',['$scope',function ($scope) {
  	//alert("hello");
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


  }]);
