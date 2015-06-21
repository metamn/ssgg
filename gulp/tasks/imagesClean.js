// Images Clean
//
// - clean all images from the 'resized' folder
// - after an image is optimized the 'resized' folder should be emptied.
// - otherwise the imageOptimize task will re-optimize also the already optimized images found here
//
// Styleguide imagesClean

// Plugins
var gulp = require('gulp'),
    del = require('del');


// Configuration
var paths = require('./../config');


gulp.task('imagesClean', function(cb) {
  del(paths.image_resize_dest + paths.image_extensions, cb);
});
