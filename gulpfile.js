var gulp = require('gulp');
var rjs = require('requirejs');
var _ = require('lodash');
var less = require('gulp-less');
var webserver = require('gulp-webserver');

gulp.task('default', ['less'], function() {
  var requireConfig = require(__dirname + '/public/scripts/require-config.js');

  return rjs.optimize(_.extend(requireConfig, {
    include: [ 'requireLib', 'text' ],
    baseUrl: 'public/scripts/',
    name: 'main',
    mainConfigFile: 'public/scripts/main.js',
    out: 'public/scripts/main-build.js',
    wrap: {
      start: "(function() {",
      end: "}());"
    }
  }));
});

gulp.task('less', function() {
  return gulp.src('./public/css/app.less')
    .pipe(less())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('webserver', function() {
  gulp.src('public')
    .pipe(webserver({
      host: '0.0.0.0',
      // host: 'localhost',
      fallback: 'index.html',
      livereload: false,
      port: 8000,
      open: true
    }));
});
