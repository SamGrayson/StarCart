(function(){
  'use strict',
  angular
    .module('detail', [
      'ngRoute'
    ])
    .config(function($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/detail:id', {
        templateUrl: 'detail/views/detail.html',
        controller: 'DetailController'
      })
    })
})()
