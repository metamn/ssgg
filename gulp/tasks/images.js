// Resize, compress and move images
//
// - supported formats: PNG, JPG, GIF, SVG
//
// - the resize / optimize task is very time consuming.
// - instead of resizing all images from 'assets/images' they should be copied one-by-one into 'assets/images/to-resize' and optimized individually
//
//
// Resize
// - if an image file together with the associated JSON file is found in the folder 'to-resize' it will be resized and moved to the folder 'resized'
// - if an image should not be resized copy directly to 'resized' instead of 'to-resize'
// - to learn about what goes ino the JSON file check https://github.com/metamn/ssgg/blob/master/site/components/pages/home/index.html.json
//
// Optimize
// - all files found in the folder 'resized' are compressed. The compressed files will overwrite the old ones.
//
// Move
// - all files from 'resized' are moved to 'dist'
//
// Clean
// - after an image is optimized the 'resized' folder should be emptied.
// - otherwise imageOptimize task will re-optimize also the already optimized images found here



// Caveats
//
// - run-sequence is not perfect, so:
// 1. after running this task make sure in the console you have a message telling the images were optimized:
//    $> gulp-imagemin: Minified 2 images (saved 357.85 kB - 73.5%)
// 2. if not, re-run the task
// 3. always run imagesClean after




// Plugins
var gulp = require('gulp'),
    runSequence = require('run-sequence');


gulp.task('images', function(cb) {
  runSequence(
    'imageResize',
    'imageResize2x',
    'imageOptimize',
    'imageMove',
    cb
  );
});
