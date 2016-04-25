'use strict';
var app = angular.module('ReactFormEntry');
/**
 * @ngdoc function
 * @name ReactFormEntry.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ReactFormEntry
 */
 var FormEntry = ReactFormEntry.FormEntry
app.controller('MainCtrl', function ($scope,$http) {
      $scope.form={}
      console.log(ReactFormEntry);
     $scope.person = { fname: 'Clark', lname: 'Kent' };
     $scope.callback = function (payload) {
       console.log(payload);
     }
     $http.get('adult-form.json').success(function(response) {
        $scope.form = response;
    });
  });
