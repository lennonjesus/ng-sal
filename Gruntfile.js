module.exports = function (grunt) {
  'use strict';

  var initConfig;

  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-contrib-concat');

  initConfig = {

    /*uglify: {
      options: {
        preserveComments: 'some',
        beautify : true,
        mangle   : true
      },
      build: {
        files: {
          'dist/ng-sal.min.js': [
            'main.js',
            'constant.config.js',
            'login.service.js',
            'login.controller.js',
            'user.controller.js',
            'login-panel.directive.js',
            'authenticated-application.directive.js',
            'user-panel.directive.js'
          ]
        }
      }
    },*/
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
          'main.js',
          'constant.config.js',
          'login.service.js',
          'login.controller.js',
          'user.controller.js',
          'login-panel.directive.js',
          'authenticated-application.directive.js',
          'user-panel.directive.js'
        ],
        dest: 'dist/ng-sal.min.js',
      },
    }
  };

  //grunt.registerTask('uglify', ['uglify:build']);

  grunt.initConfig(initConfig);

};
