// HTML
// - minify and copy html files to dist
// - create seo friendly urls


// Plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    onError = require('../utils/onError'),

    gulpIgnore = require('gulp-ignore'),
    rename = require('gulp-rename'),
    minifyHTML = require('gulp-minify-html');


// Configuration
var paths = require('./../config');



var html = function(source, dest) {
  return gulp.src(source)
    .pipe(plumber({errorHandler: onError}))

    // Do not copy BEM modifiers and elements
    .pipe(gulpIgnore.exclude(function(file) {
      if ((file.path.indexOf('--') !== -1) || (file.path.indexOf('__') !== -1)) {
        return true;
      }
    }))

    // SEO friendly urls
    .pipe(rename(function(path) {

      // rename home/home.html > index.html
      if (path.dirname == 'home') {
        path.dirname = '';
      }

      // rename work.html > index.html
      path.basename = 'index';

      // rename not-found/index.html > 404.html
      if (path.dirname == 'not-found') {
        path.dirname = '';
        path.basename = '404';
      }
    }))

    .pipe(minifyHTML())
    .pipe(gulp.dest(dest));
}


// Task for minifying and moving .html files for /site
gulp.task('html', function() {
  html('site/' + paths.html_src, paths.dest);
});


// Task for minifying and moving .html files for /styleguide
gulp.task('htmlSg', function() {
  html('styleguide/' + paths.html_src, paths.dest + '/styleguide/');
});
