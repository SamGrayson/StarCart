(function() {
  'use strict';
  angular
    .module('starCart', ['ngRoute'])
    .config(function($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/404', {
        template: '<h2>Page not found</h2>'
      })
      .otherwise ({
        redirectTo: '/404'
      })
    })
})();
