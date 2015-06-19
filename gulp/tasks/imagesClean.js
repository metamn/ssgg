// Clean the temp folder where images are resized


// Plugins
var gulp = require('gulp'),
    del = require('del');


// Configuration
var paths = require('./../config');


gulp.task('images_clean', function(cb) {
  del(paths.image_resize_dest + paths.image_extensions, cb);
});
