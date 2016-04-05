# ng-sal
Simple AngularJS Login

Idiomas: Português | [Inglês](README-en_US.md)

Este projeto é um fork do projeto [sca-ngular](https://github.com/tagama/sca-ngular) do Thiago Gama, com algumas melhorias:

- [Angular Style](https://github.com/johnpapa/angular-styleguide)
- Código minificado (com Grunt Uglify)

O ng-sal fornece alguns componentes visuais e diretivas que podem ser integradas em projetos que precisam de autenticação.
Funciona bem com Spring Security em projetos SpringBoot.

##### Instalação (com Bower)
```
bower install ng-sal --save
```

##### Utilização
Referencie o ng-sal em seu HTML
```html
<script src="bower_components/ng-sal/dist/ng-sal.min.js"></script>
```

Declare a dependência do ng-sal
```javascript
angular.module('yourApp', ['ng-sal']);
```

Configure o applicationName
```javascript
angular.module('yourApp').config(['ngsalConfig'], ngsalConfiguration);

function ngsalConfiguration(ngsalConfig) {
  ngsalConfig.applicationName = 'yourBackendAppContext';
}
```

Insira as diretivas nos locais em que desejar
```html
<!-- painel de login -->
<div login-panel></div>

<!-- dados de perfil do usuário logado -->
<div user-panel></div>

<!-- área protegida -->
<body authenticated-application>
```



###### TODO
- projeto de exemplo
- gulp
- i18n
- documentação (en|pt_BR)
- testes
- parâmetros customizáveis
- estilos css customizáveis
- adequação aos padrões [Angular Style](https://github.com/johnpapa/angular-styleguide)
