(function() {
  'use strict';
  angular
    .module('cart')
    .controller('CartController', function($scope, CartService, $routeParams){

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
