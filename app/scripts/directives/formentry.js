'use strict';
var app = angular.module('ReactFormEntry');
/**
 * @ngdoc directive
 * @name ReactFormEntry.directive:formEntry
 * @description
 * # formEntry
 */
 app.directive( 'formEntry', function( reactDirective ) {
   return reactDirective(FormEntry);
 } );
