// Image Optimize
//
// - compress PNG, JPG, GIF and SVG images
// - see https://www.npmjs.com/package/gulp-imagemin
//
// Styleguide imageOptimize

// Plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    onError = require('../utils/onError'),

    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');


// Configuration
var paths = require('./../config');



// Task for compressing / optimizing images
gulp.task('imageOptimize', function() {
  return gulp.src(paths.image_resize_dest + paths.image_extensions)
    .pipe(plumber({errorHandler: onError}))
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(paths.image_resize_dest));
});
