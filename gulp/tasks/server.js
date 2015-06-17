// Start server

// Plugins
var gulp = require('gulp'),
    browserSync = require('browser-sync');

// Configuration
var paths = require('./../config');


gulp.task('server', function(cb) {
  browserSync({
    server: {
      baseDir: paths.dest
    }
  });

  cb();
});
