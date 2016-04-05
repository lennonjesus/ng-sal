(function () {
  'use strict';

  angular.module('ng-sal').controller('userController', userController);

  userController.$inject = ['$scope', 'loginService', 'ngsalConfig', '$state'];

  function userController ($scope, loginService,ngsalConfig, $state) {

      $scope.logout = function () {
          loginService.logout();
      };

      $scope.changePerfil = function (perfil) {
          //TODO: depende de alteração do sca
      };

      $scope.$on('event:userDetailsPrepared', function () {
          $scope.user = loginService.getCurrentUser().userDetails;
          $state.go(ngsalConfig.homePath);
      });

      $scope.$on('event:userLogout', function () {
          $scope.user = {};
      });

  }

})();
