// The default Gulp task
// - it generates the /site
// - compiles SWIG, SCSS files and moves to the destination
// - concatenates JS files and moves to the destination


// Plugins
var gulp = require('gulp'),
    runSequence = require('run-sequence');



// RunSequence makes sure all tasks are running one after another
// - otherwise Gulp is messing up everything with it's async task runner
gulp.task('default', function(cb) {
  runSequence(
    'swig',
    'html',
    'scss',
    'js',
    'jsMove',
    cb
  );
});
