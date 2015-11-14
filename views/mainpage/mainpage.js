'use strict';

angular.module('myapp.mainpage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'mainpage/mainpage.html',
    controller: 'MainpageCtrl'
  });
}])

.controller('MainpageCtrl', [function() {

}]);
