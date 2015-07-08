(function() {
  'use strict';
  angular
    .module('starCart')
    .controller('MainController', function($scope, ListService, CartService, $routeParams){

      ListService.getData().success(function(list) {
        $scope.list = ListService.mapData(list.results)
      })

      ListService.getProduct($routeParams.id).then(function(product){
        $scope.product = product
      })

      CartService.getCart().success(function (cart) {
        $scope.cart = cart;
        console.log(cart);
      });

      $scope.getTotalPrice = function() {
        var total = 0;
        _.each($scope.cart, function(el, idx) {
          total += Number($scope.cart[idx].price);
        });
        return total;
      };

      $scope.addToCart = function (product) {
        CartService.addToCart(product);
      };

      $scope.deleteFromCart = function (productId) {
        CartService.deleteFromCart(productId);
      };

      $scope.setOrder = function (order) {
          $scope.order = order;
          console.log($scope.order);
      };
    });
})();
