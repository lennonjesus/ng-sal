(function () {
  'use strict';

  angular.module('ng-sal').directive('authenticatedApplication', authenticatedApplication);

  function authenticatedApplication (loginService, $document, $location) {
      return {
          restrict: 'A',
          link: function (scope, elem, attrs) {

              scope.isAuthenticated = false;

              if (loginService.getCurrentUser() === null || loginService.getCurrentUser().username === null || loginService.getCurrentUser().username === '') {
                  loginService.authenticate({}, function (data) {
                      scope.isAuthenticated = true;
                      loginService.setUserDetails(data);
                  }, function (data) {
                      scope.isAuthenticated = false;
                  });
              }
              elem.removeClass('waiting-for-angular');

              scope.$on('event:auth-loginRequired', function () {
                  scope.isAuthenticated = false;
              });
              scope.$on('event:auth-loginConfirmed', function () {
                  scope.isAuthenticated = true;
              });
              scope.$on('event:userLogout', function () {
                  scope.isAuthenticated = false;
              });
          }
      }
  }

})();
