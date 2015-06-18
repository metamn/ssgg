// Move images


// Plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    onError = require('../utils/onError');


// Configuration
var paths = require('./../config');



// Move resized and compressed images
// - collect all images and move to dist/assets/images
gulp.task('image_move', function() {
  return gulp.src(paths.image_resize_dest + '/*.{png,jpg,.gif}')
    .pipe(plumber({errorHandler: onError}))
    .pipe(gulp.dest(paths.images_dest));
});