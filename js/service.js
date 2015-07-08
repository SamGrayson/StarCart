(function() {
  'use strict';
  angular
    .module('starCart')
    .factory('ListService', function($http, $cacheFactory, $q) {

      var cacheEngine = $cacheFactory('AwesomePhotos');

      var linkObj = {
        baseUrl: 'https://openapi.etsy.com/v2/listings/active.js?includes=MainImage&',
        apiKey: 'wz6v1ulvml3oxvjg6cohrntb',
        keyword: 'Star%20Wars'
      }

      var bldUrl = function(obj) {
        return obj.baseUrl + 'api_key=' + obj.apiKey + '&keywords=' + obj.keyword + '&callback=JSON_CALLBACK'
      }

      var mapData = function(collection) {
        return _.map(collection, function(obj){
          return {
            img: obj.MainImage.url_fullxfull,
            title: obj.title,
            id: obj.listing_id,
            descript: obj.description,
            url: obj.url,
            materials: obj.materials,
            price: obj.price
          }
        });
      }

      var getData = function() {
        return $http.jsonp(bldUrl(linkObj))
      }

      var getProduct = function(id) {
        return $http.jsonp(bldUrl(linkObj)).then(function (list) {
          var narrowedDownArr = _.where(list.data.results, {listing_id: Number(id)});
          console.log(narrowedDownArr);
          return mapData(narrowedDownArr)[0];
        });
      }

      return {
        getData : getData,
        mapData : mapData,
        getProduct : getProduct
      }


    })
    .factory('CartService', function ($http) {
      var url = 'http://tiy-fee-rest.herokuapp.com/collections/StarCart1';
      var addToCart = function (product) {
      $http.post(url, product).success(function (resp) {
          console.log(resp);
        }).error(function (err) {
          console.log(err);
        });
      };
      var deleteFromCart = function(product) {
        var deleteUrl = url + '/' + product;
        $http.delete(deleteUrl).success(function (resp) {
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
