// JS


// Plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    onError = require('../utils/onError'),
    data = require('gulp-data'),

    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');


// Configuration
var paths = require('./../config');


// - collect all .js files into filename.js, then minify into filename.min.js, then move to dest
var _js = function(source, filename, dest) {
  return gulp.src(source)
    .pipe(plumber({errorHandler: onError}))
    .pipe(data(function(file) {
      console.log("Merging " + file.path + " into " + filename)
    }))
    .pipe(concat(filename))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest(dest));
};


// Task for concatenating, minifying and moving .js files for /site
gulp.task('js', function() {
  _js(paths.js_src, paths.js_filename, paths.js_dest);
});

// Task for concatenating, minifying and moving .js files for /styleguide
gulp.task('js_sg', function() {
  _js(paths.styleguide_js_src, paths.styleguide_js_filename, paths.styleguide_js_dest);
});
