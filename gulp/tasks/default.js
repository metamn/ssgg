// Default
//
// The default Gulp task to generate the site
// - compile .swig files into .html, .scss or .js
// - minify and copy .html files to destination
// - compile the global .scss files (site.scss, styleguide.scss) with autoprefixer, minify them, and move them to destination together with the sourcemaps
// - collect all .js files from '/components' into a single file (site.min.js, styleguide.min.js), minimize it and move to the destination
// - move thrid party scripts from 'assets/scripts' into destination
//
// Styleguide default


// Plugins
var gulp = require('gulp'),
    runSequence = require('run-sequence');


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
