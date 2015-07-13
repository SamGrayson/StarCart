(function () {
  'use strict';
  angular
    .module('detail')
    .directive('detailDirective', function () {
      return {
        restrict: 'E', // E - element, A - attribute, C - class
        templateUrl: 'detail/views/detail.directive.html',
        scope: {
          p: '=',
          extra: '@',
          action: '&'
        },
        link: function (scope, element, attributes) {
          // element.find('header').find('a').on('mouseover', function () {
          //   scope.url = 'http://www.placecage.com/c/400/600';
          //   scope.$apply();
          // });

          // element.on('click', function (e) {
          //   e.preventDefault();
          //   console.log(attributes.calvin);
          //   element.find('img').toggleClass('grow');
          // });

        }
      };
    });
})();
