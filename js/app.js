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
      .when('/detail:id', {
        templateUrl: 'views/detail.html',
        controller: 'MainController'
      })
      .when('/cart', {
        templateUrl: 'views/template.html',
        controller: 'CartController'
      })
      .when('/404', {
        template: '<h2>Page not found</h2>'
      })
      .otherwise ({
        redirectTo: '/404'
      })
    })
})();
