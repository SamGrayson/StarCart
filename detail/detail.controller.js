(function() {
  'use strict';
  angular
    .module('detail')
    .controller('DetailController', function($scope, DetailService, $routeParams){

      DetailService.getProduct($routeParams.id).then(function(product){
        $scope.product = product
      })

    });
})();
