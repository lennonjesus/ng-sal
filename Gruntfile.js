module.exports = function (grunt) {
  'use strict';

  var initConfig;

  require('load-grunt-tasks')(grunt);

  initConfig = {

    uglify: {
      options: {
        preserveComments: 'some'
      },
      build: {
        files: {
          'dist/ng-sal.min.js': [
            'main.js'
          ]
        }
      }
    }
  };

  grunt.registerTask('build', ['uglify:build']);
  grunt.initConfig(initConfig);

};
