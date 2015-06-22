// SSGG
//
// Generate the documentation for this site
//


// Plugins
var gulp = require('gulp'),
    shell = require('gulp-shell');


// Generate documentation for all Gulp tasks
gulp.task('ssgg', shell.task([
  'kss-node --mask "*.js" --source gulp/tasks/ --destination gulp/doc --title "Gulp Tasks"'
]))
