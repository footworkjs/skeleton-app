var gulp = require('gulp');
var rjs = require('requirejs');
var _ = require('lodash');
var less = require('gulp-less');

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
