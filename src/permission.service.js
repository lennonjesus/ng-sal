(function () {
  'use strict';

  angular.module('ng-sal').factory('permissionService', permissionService);

  permissionService.$inject = ['loginService','secureResource'];

  function permissionService (loginService,secureResource) {

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
