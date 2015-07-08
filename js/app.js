(function() {
  'use strict';
  angular
    .module('starCart', [
      'ngRoute',
      'cart',
      'detail'
      ])
    .config(function($routeProvider){
      $routeProvider
      .when('/404', {
        template: '<div style="background:url(http://4.bp.blogspot.com/-X_pVKuY7FpI/T25kKAU_PaI/AAAAAAAACUo/128UFsDAquE/s1600/Obi%2BWon%2BThese%2Baren%2527t%2Bthe%2Bdroids.png); background-size:cover; background-position:50% 50%; background-repeat:none; height:100vh; width: 100vw;">' +
                    '<h2 style="color:white; font-size: 4em; font-family: sans-serif;">This is not the page you are looking for.</h2>' +
                   '</div>'
      })
      .otherwise ({
        redirectTo: '/404'
      })
    })
})();
