// Image Move
//
// - move resized and compressed images to destination
//
// Styleguide imageMove

// Plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    onError = require('../utils/onError');


// Configuration
var paths = require('./../config');


// Task for moving image files for /site
gulp.task('imageMove', function() {
  return gulp.src(paths.image_resize_dest + paths.image_extensions)
    .pipe(plumber({errorHandler: onError}))
    .pipe(gulp.dest(paths.images_dest))
});
