// TheStyleguide generator Gulp task
// - it generates the /styleguide


// Plugins
var gulp = require('gulp'),
    runSequence = require('run-sequence');


// RunSequence makes sure all tasks are running one after another
// - otherwise Gulp is messing up everything with it's async task runner
gulp.task('styleguide', function(cb) {
  runSequence(
    'styleguide_menu',
    'styleguide_folders',
    'styleguide_folders_remove',
    'styleguide_kss',
    'swig_sg',
    'html_sg',
    'scss_sg',
    'js_sg',
    'js_move_sg',
    cb
  );
});
