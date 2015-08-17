(function(){
  'use strict',
  angular
    .module('detail', [
      'ngRoute'
    ])
    .config(function($routeProvider){
      $routeProvider
      .when('/detail:id', {
        templateUrl: 'detail/views/detail.html',
        controller: 'DetailController'
      })
    })
})()
