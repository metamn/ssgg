// Start server

// Plugins
var gulp = require('gulp'),
    browserSync = require('browser-sync');

// Configuration
var paths = require('./../config');

// Starts a local server (ie. http://localhost:3000) and an external / intranet server (ie. http://192.168.0.54)
// - the external server is used to test the site with all devices connected to your wifi network
gulp.task('server', function(cb) {
  browserSync({
    server: {
      baseDir: paths.dest
    }
  });

  cb();
});
