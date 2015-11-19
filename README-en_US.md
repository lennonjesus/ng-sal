# ng-sal
Simple AngularJS Login

Languages: [Português](README.md) | Inglês

This is a fork of Thiago Gama's [sca-ngular](https://github.com/tagama/sca-ngular) with some improvements:

- [Angular Style](https://github.com/johnpapa/angular-styleguide)
- Minified code (with Grunt Uglify)

The ng-sal provides visual components and directives that can be integrated with projects with authentication requirements.
It works fine with Spring Security on SpringBoot projects.

##### Install (with Bower)
```
bower install ng-sal --save
```

##### Usage
Add ng-sal in your HTML
```html
<script src="bower_components/ng-sal/dist/ng-sal.min.js"></script>
```

Declare ng-sal in your AngularJS application
```javascript
angular.module('yourApp', ['ng-sal']);
```

Configure the applicationName
```javascript
angular.module('yourApp').config(['ngsalConfig'], ngsalConfiguration);

function ngsalConfiguration(ngsalConfig) {
  ngsalConfig.applicationName = 'yourBackendAppContext';
}
```

Put the ng-sal directives wherever you want
```html
<!-- login panel -->
<div login-panel></div>

<!-- logged user profile -->
<div user-panel></div>

<!-- protected area -->
<body authenticated-application>
```
###### TODO
- example project
- i18n
- documentation (en|pt_BR)
- tests
- parameters customization
- stylesheet customization
- refactor with [Angular Style](https://github.com/johnpapa/angular-styleguide)
