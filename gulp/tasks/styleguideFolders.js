// Styleguide Folders


// Plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    onError = require('../utils/onError'),

    fs = require('fs'),
    data = require('gulp-data'),
    mkdirp = require('mkdirp');


// Configuration
var paths = require('./../config');


// - copy folders from /site under styleguide/pages
gulp.task('styleguide_folders', function() {
  return gulp.src(paths.styleguide_folders_copy)
    .pipe(plumber({errorHandler: onError}))
    .pipe(data(function(file) {
      var stats = fs.lstatSync(file.path);
      if (stats.isDirectory()) {
        var dir = file.path.replace('site/components', 'styleguide/components/pages');
        if (!fs.existsSync(dir)) {
          mkdirp(dir, function (err) {
            console.log(file.relative + ' created');
          });
        }
      }
    }));
});


// - remove unused folders from styleguide
gulp.task('styleguide_folders_remove', function() {
  return gulp.src(paths.styleguide_folders_remove)
    .pipe(plumber({errorHandler: onError}))
    .pipe(data(function(file) {
      var stats = fs.lstatSync(file.path);
      if (stats.isDirectory()) {
        var dir = file.path.replace('styleguide/components/pages', 'site/components');
        if (!fs.existsSync(dir)) {
          console.log(file.relative + ' should be removed from styleguide');
        }
      }
    }));
})
