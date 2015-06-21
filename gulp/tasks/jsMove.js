// jsMove
//
// - move thrid party scripts from 'assets/scripts' into destination
//
// Styleguide jsMove

// Plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    onError = require('../utils/onError');

// Configuration
var paths = require('./../config');


// Move script files
// - move (third party) scripts to dest
var _js_move = function(src, dest) {
  return gulp.src(src)
    .pipe(plumber({errorHandler: onError}))
    .pipe(gulp.dest(dest));
}


// Task for moving .js files for /site
gulp.task('jsMove', function() {
  _js_move('site/' + paths.js_move_src, paths.js_move_dest);
});

// Task for moving .js files for /styleguide
gulp.task('jsMoveSg', function() {
  _js_move('styleguide/' + paths.js_move_src, paths.styleguide_js_move_dest);
});
