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
    'src/**/!(main.js)*.js',        
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
