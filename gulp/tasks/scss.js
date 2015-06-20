// SCSS
//
// - compile the global .scss file (site.scss, styleguide.scss) with autoprefixer
// - minify and copy the final .css and the sourcemap to dist/assets/styles
//
// - the global .scss file should be in charge @importing all other .scss files from /components
// - the import should be done in the right order otherwise some mixins might not be found
//

// Plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    onError = require('../utils/onError'),

    sass = require('gulp-sass'),
    cssGlobbing = require('gulp-css-globbing'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer-core'),
    minifyCSS = require('gulp-minify-css');


// Configuration
var paths = require('./../config');



var _scss = function(source, dest) {
  return gulp.src(source)
    .pipe(plumber({errorHandler: onError}))
    .pipe(cssGlobbing({
      extensions: ['.scss']
    }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dest));
}

// Task for compiling and movind the .css for /site
gulp.task('scss', function(){
  _scss('site/' + paths.scss_src, paths.scss_dest);
});


// Task for compiling and movind the .css for /styleguide
gulp.task('scssSg', function(){
  _scss('styleguide/' + paths.styleguide_scss_src, paths.styleguide_scss_dest);
});
