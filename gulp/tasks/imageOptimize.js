// Optimize images

// Plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    onError = require('../utils/onError'),

    shell = require('gulp-shell');


// Configuration
var paths = require('./../config');




// Optimize images
// - the gulp pngquant task gives an error
// - we use gulp shell to run pngquant manually
// - the old file will be overwritten instead of appending the usual 'fs8' suffix
gulp.task('image_optimize', function() {
  return gulp.src(paths.image_resize_dest + '/*.png')
    .pipe(plumber({errorHandler: onError}))
    .pipe(shell(['pngquant --ext .png --force <%= file.path %>']))
});
