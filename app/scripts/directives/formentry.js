'use strict';

/**
 * @ngdoc directive
 * @name ReactFormEntry.directive:formEntry
 * @description
 * # formEntry
 */
angular.module('ReactFormEntry')
.directive( 'formEntry', function( reactDirective ) {
  return reactDirective( FormEntry );
} );
