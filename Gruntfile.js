module.exports = function (grunt) {
  'use strict';

  var initConfig;

  require('load-grunt-tasks')(grunt);

  //grunt.loadNpmTasks('grunt-contrib-concat');

  initConfig = {

    uglify: {
      options: {
        preserveComments: 'some',
        beautify : false,
        mangle   : false
      },
      build: {
        files: {
          'dist/ng-sal.min.js': [
            'src/main.js',
            'src/constant.config.js',
            'src/login.service.js',
            'src/login.controller.js',
            'src/user.controller.js',
            'src/login-panel.directive.js',
            'src/authenticated-application.directive.js',
            'src/user-panel.directive.js'
          ]
        }
      }
    }
  };

  grunt.registerTask('build', ['uglify:build']);

  grunt.initConfig(initConfig);

};
