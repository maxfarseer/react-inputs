var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('watch', function() {
  gulp.watch('scripts/react/**/*.js', ['browserify-8888']);
});

function bundle(fileName) {
  var b = browserify(fileName, {transform: 'reactify'});

  return b
    .bundle();
}

gulp.task('browserify-8888', function () {
  return bundle('./scripts/react/app.react.js')

    .pipe(source('app.react.js'))
    .pipe(gulp.dest('scripts/'));
});

gulp.task('default', ['browserify-8888','watch']);
