(function() {
  'use strict';
  angular
    .module('starCart')
    .controller('MainController', function($scope, ListService, $routeParams){
      ListService.getData().success(function(list) {
        $scope.list = ListService.mapData(list.results)
      })
      ListService.getProduct($routeParams.id).then(function(product){
        $scope.product = product
        console.log(product)
      })
    })
})();
