'use strict';

// Declare app level module which depends on views, and components
angular.module('myapp', [
  'ngRoute',
  'myapp.mainpage'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/mainpage'});
}]);
