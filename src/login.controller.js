(function () {
  'use strict';

  angular.module('ng-sal').controller('loginController', loginController);

  loginController.$inject = ['$scope', 'loginService', 'authService', '$document', '$sanitize'];

  function loginController ($scope, loginService, authService, $document, $sanitize) {

      $scope.authenticationError = false;

      function sanitizeCredentials() {
          return {
              username: $sanitize($scope.username),
              password: btoa(unescape(encodeURIComponent($scope.password))),
              ignoreAuthModule: 'ignoreAuthModule'
          };
      }

      $scope.submit = function () {

          $scope.authenticationError = false;

          loginService.login(sanitizeCredentials(),
              function (data) {
                  loginService.activateLogin(data);
                  limpaForm();
              }, function (data) {
                  loginService.logout(data);
                  limpaForm();
                  $scope.authenticationError = true;
              });
      };

      function limpaForm() {
          $scope.username = null;
          $scope.password = null;

      }

  }

})();
