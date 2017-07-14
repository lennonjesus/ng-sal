(function () {
  'use strict';

  angular.module('ng-sal').directive('loginPanel', loginPanel);

  loginPanel.$inject = ['ngsalConfig'];

  function loginPanel (ngsalConfig) {
      return {
          restrict: 'A',
          template: '<div block-ui block-ui-pattern="/.*\/api\/' + ngsalConfig.apiVersion + '\/authentication/"><div class="content-field-total" ng-controller="loginController" ng-hide="isAuthenticated"><div class="content-field"><h3>Área Restrita</h3><div class="alarm alarm-alizarin" ng-show="authenticationError">Usuário ou senha inválido!</div><div id="login-box"><form name="loginForm" autocomplete="off"><div class="content-login" show-errors><label>Login</label><input auto-focus type="text" name="username" ng-model="username"/><div class="alarm alarm-alizarin" ng-show="loginForm.username.$error.required">Obrigatório</div></div><div class="content-pass" show-errors><label">Senha</label><input type="password" name="password" ng-model="password" /><div class="alarm alarm-alizarin" ng-show="loginForm.password.$error.required">Obrigatório</div></div><div class="content-buttons"><button class="bt bt-lime" type="submit" ng-click="submit()" ><i class="mdi mdi-check"></i>Autenticar</button></div></form></div></div></div>'
      }
  }

})();
