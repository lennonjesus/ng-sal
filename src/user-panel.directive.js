(function () {
  'use strict';

  angular.module('ng-sal').directive('userPanel', userPanel);

  function userPanel () {
      return {
          restrict: 'A',
          template:
          '<div class="navbar-right" ng-controller="userController" ng-show="isAuthenticated">' +
              '<ul class="nav navbar-nav">' +
                  '<li class="dropdown user user-menu">' +
                      '<a href="" class="dropdown-toggle" data-toggle="dropdown"> <i class="glyphicon glyphicon-user"></i></a>' +
                      '<ul class="dropdown-menu">' +
                          '<li class="user-header bg-light-blue"  style="height: auto;"><p><small>{{user.login}}</small></p><p>{{user.nome}}<small>Perfil: {{user.perfil}}</small></p></li>' +
                          '<li class="user-footer"><div class="pull-right"><a href="" ng-click="logout()" class="btn btn-danger" style="color:white;"> Sair</a></div></li>' +
                      '</ul>' +
                  '</li>' +
              '</ul>' +
          '</div>'
      }
  }

})();
