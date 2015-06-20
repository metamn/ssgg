// KSS
// - collects all KSS documentation from all .scss files and saves into a .json file
// - later this .json file can be processed by the styleguide

// Plugins
var gulp = require('gulp'),
    fs = require('fs'),
    kss = require('kss');


// Configuration
var paths = require('./../config');


// The task creating the kss.json file with all KSS entries from all SCSS files
gulp.task('styleguideKSS', function() {
  kss.traverse('./site/components', { mask: '*.scss', markdown: true }, function(err, styleguide) {
    if (err) throw err;
    fs.writeFileSync('styleguide/kss.json', JSON.stringify(styleguide.section()));
  });
});
