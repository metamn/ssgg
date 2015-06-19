// Resize, compress and move images


// Plugins
var gulp = require('gulp'),
    runSequence = require('run-sequence');


gulp.task('images', function(cb) {
  runSequence(
    'image_resize',
    'image_resize_2x',
    'image_optimize',
    'image_move',
    cb
  );
});
