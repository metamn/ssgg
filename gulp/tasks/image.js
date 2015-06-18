// Resize, compress and move an image


// Plugins
var gulp = require('gulp'),
    runSequence = require('run-sequence');


gulp.task('image', function(cb) {
  runSequence(
    'image_resize',
    'image_resize_2x',
    'image_optimize',
    'image_move',
    cb
  );
});
