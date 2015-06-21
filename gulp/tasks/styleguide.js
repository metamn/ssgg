// Styleguide
//
// The default Gulp task to generate the styleguide
// - create a menu to display styleguide entries for 'Framework' and 'Project' BEM folders
// - generate styleguide entries from site
// - sync styleguide entries with the site
// - collect all KSS documentation from all .scss files from site and save into kss.json
// - compile .swig files into .html, .scss or .js
// - minify and copy .html files to destination
// - compile the global styleguide.scss with autoprefixer, minify, and move to destination together with the sourcemap
// - collect all .js files from '/components' into a single file (styleguide.min.js), minimize it and move to the destination
// - move thrid party scripts from 'assets/scripts' into destination
//
// Styleguide styleguide

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
