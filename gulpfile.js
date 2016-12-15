var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default', function () {
  gulp.start(['build']);
});

gulp.task('build', function(callback) {
  return gulp.src([
    'src/main.js',
    'src/constant.config.js',
    'src/login.service.js',
    'src/login.controller.js',
    'src/user.controller.js',
    'src/login-panel.directive.js',
    'src/authenticated-application.directive.js',
    'src/user-panel.directive.js'
  ])
  .pipe(sourcemaps.init())
  .pipe(concat('ng-sal.min.js'))
  .pipe(uglify())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./dist'))
  .on('error', function (err) {
    console.error(err);
  });
});
