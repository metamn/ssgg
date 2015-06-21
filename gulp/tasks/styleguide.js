// The Styleguide generator Gulp task
// - it generates the /styleguide
// - collects all KSS documentation from SCSS files into kss.json


// Plugins
var gulp = require('gulp'),
    runSequence = require('run-sequence');


// RunSequence makes sure all tasks are running one after another
// - otherwise Gulp is messing up everything with it's async task runner
gulp.task('styleguide', function(cb) {
  runSequence(
    'styleguideMenu',
    'styleguideFolders',
    'styleguideFoldersRemove',
    'styleguideKSS',
    'swigSg',
    'htmlSg',
    'scssSg',
    'jsSg',
    'jsMoveSg',
    cb
  );
});

// An alias task for 'styleguide'
gulp.task('sg', ['styleguide']);
