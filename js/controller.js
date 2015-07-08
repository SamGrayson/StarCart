(function() {
  'use strict';
  angular
    .module('starCart')
    .controller('MainController', function($scope, ListService, CartService, $routeParams){

      ListService.getData().then(function(list) {
        $scope.list = list
        console.log(list)
      })

      $scope.setOrder = function (order) {
          $scope.order = order;
          console.log($scope.order);
      };

    });
})();
