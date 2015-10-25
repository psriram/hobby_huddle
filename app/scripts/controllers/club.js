'use strict';
/**
 * @ngdoc function
 * @name hobbyhuddleApp.controller:clubCtrl
 * @description
 * # clubCtrl
 * Club Controller of the hobbyhuddleApp
 */
angular.module('hobbyhuddleApp').controller('clubCtrl',['$scope',function ($scope) {
	$scope.test=[
	 {'id':1,'name':'test1'},
     {'id':2,'name':'test2'}
	];
}]);