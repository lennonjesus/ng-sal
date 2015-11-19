(function () {
  'use strict';

  angular.module('ng-sal').directive('loginPanel', loginPanel);

  function loginPanel () {
      return {
          restrict: 'A',
          template: '<div block-ui block-ui-pattern="/.*\/api\/authentication/"><div class="form-box" id="login-box" ng-controller="loginController" ng-hide="isAuthenticated"><div class="header"><i class="fa fa-lock"></i> Área Restrita</div><form name="loginForm" autocomplete="off"><div class="body bg-gray"><div class="form-group" show-errors><input auto-focus type="text" name="username" ng-model="username" class="form-control" placeholder="Login"/><span class="help-block" ng-show="loginForm.username.$error.required">Obrigatório</span></div><div class="form-group" show-errors><input type="password" name="password" ng-model="password" class="form-control" placeholder="Senha"/><span class="help-block" ng-show="loginForm.password.$error.required">Obrigatório</span></div></div><div class="footer bg-gray"><button type="submit" ng-click="submit()" class="btn btn-primary btn-block">Autenticar</button><div class="alert alert-danger alert-dismissable" ng-show="authenticationError"><b>Usuário ou senha inválida!</b></div></div></form></div></div>'
      }
  }

})();
