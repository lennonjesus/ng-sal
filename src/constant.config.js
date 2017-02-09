(function () {
  'use strict';

  angular.module('ng-sal').constant('ngsalConfig', {
      applicationName: 'ngsalConfig.applicationName',
      applicationHomePath : 'ngsalConfig.homePath',
      applicationApiVersion: 'ngsalConfig.apiVersion'
  }).constant('secureResource', {
      name: function (name){
          return 'ROLE_' + name;
      }
  });
})();
