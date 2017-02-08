(function () {
  'use strict';

  angular.module('ng-sal').factory('permissionService', permissionService,secureResource);

  permissionService.$inject = ['loginService','secureResource'];

  function permissionService (loginService) {

    var service = {
        hasPermission : hasPermission
    };

    return service;

    function hasPermission(name){
         if(loginService.getCurrentUser()){
            return loginService.getCurrentUser().permissions[secureResource.name(name)];
         }
         return false;
    }

  }

})();
