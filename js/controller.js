(function() {
  'use strict';
  angular
    .module('starCart')
    .controller('MainController', function($scope, ListService){
      ListService.getData().success(function(list) {
        $scope.list = ListService.mapData(list.results)
      });
    })
})();
