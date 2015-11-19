(function () {
  'use strict';

  angular.module('ng-sal').controller('userController', userController);

  userController.$inject = ['$scope', 'loginService', '$document'];

  function userController ($scope, loginService) {

      $scope.logout = function () {
          loginService.logout();
      };

      $scope.changePerfil = function (perfil) {
          //TODO: depende de alteração do sca
      };

      $scope.$on('event:userDetailsPrepared', function () {
          $scope.user = loginService.getCurrentUser().userDetails;
      });

      $scope.$on('event:userLogout', function () {
          $scope.user = {};
      });

  }

})();
