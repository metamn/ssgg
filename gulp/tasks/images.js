// Resize, compress and move images
// - Run Sequence is not perfect, so:
// 1. after running this task make sure in the console the images are optimized:
//    $> gulp-imagemin: Minified 2 images (saved 357.85 kB - 73.5%)
// 2. if not, re-run the task
// 3. clean the /resized folder with images-clean task. Otherwise image-optimize will re-optimize also old images found here



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
