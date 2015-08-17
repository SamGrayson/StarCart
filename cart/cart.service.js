(function () {
  'use strict';
  angular
    .module('cart')
    .factory('CartService', function ($http, $rootScope) {
      var url = 'http://tiy-fee-rest.herokuapp.com/collections/StarCart1';

      var addToCart = function (product) {
      $http.post(url, product).success(function (resp) {
        $rootScope.$broadcast('item:created');
          console.log(resp);
        }).error(function (err) {
          console.log(err);
        });
      };
      var deleteFromCart = function(product) {
        var deleteUrl = url + '/' + product;
        $http.delete(deleteUrl).success(function (resp) {
          $rootScope.$broadcast('item:deleted');
            console.log(resp);
          }).error(function (err) {
            console.log(err);
          });
      };
      var getCart = function () {
        return $http.get(url);
      };

      var getCartLength = function() {
        $http.get(url).success(function(cart) {
          return cart.length;
        })
      };

      return {
        addToCart: addToCart,
        deleteFromCart: deleteFromCart,
        getCart: getCart,
        getCartLength: getCartLength
      };
    })
  })();
