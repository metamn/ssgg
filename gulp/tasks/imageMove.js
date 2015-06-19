// Move images


// Plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    onError = require('../utils/onError');


// Configuration
var paths = require('./../config');



// Move resized and compressed images to destination
// - also clean up the directory
gulp.task('image_move', function() {
  return gulp.src(paths.image_resize_dest + paths.image_extensions)
    .pipe(plumber({errorHandler: onError}))
    .pipe(gulp.dest(paths.images_dest))
});
