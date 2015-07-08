(function() {
  'use strict';
  angular
    .module('detail')
    .factory('DetailService', function($http, $cacheFactory, $q) {

      var cacheEngine = $cacheFactory('StarCartDetail');

      var cleanCharacters = function(html) {
       var txt = document.createElement("textarea");
       txt.innerHTML = html;
       return txt.value;
     };

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
            title: cleanCharacters(obj.title),
            id: obj.listing_id,
            descript: cleanCharacters(obj.description),
            url: obj.url,
            materials: obj.materials,
            price: obj.price
          }
        });
      }

      var getProduct = function(id) {
          var deferred = $q.defer();
          var cache = cacheEngine.get('product');
          if(cache) {
            console.log('we are in the cache');
            deferred.resolve(cache);
          } else {
            $http.jsonp(bldUrl(linkObj)).then(function (list) {
              var narrowedDownArr = _.where(list.data.results, {listing_id: Number(id)});
              console.log('we are in the http method')
              deferred.resolve(mapData(narrowedDownArr)[0]);
            })
          }
            return deferred.promise
      }

      return {
        getProduct : getProduct
      }

     })
 })();
