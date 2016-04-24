'use strict';
var app = angular.module('ReactFormEntry');
/**
 * @ngdoc function
 * @name ReactFormEntry.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ReactFormEntry
 */
app.controller('MainCtrl', function ($scope,$http) {
      $scope.form={}
     $scope.person = { fname: 'Clark', lname: 'Kent' };
     $scope.callback = function (payload) {
       console.log(payload);
     }
     $http.get('adult-form.json').success(function(response) {
        $scope.form = response;
    });
  });
