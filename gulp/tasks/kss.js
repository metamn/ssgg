// KSS

// Plugins
var gulp = require('gulp'),
    fs = require('fs'),
    kss = require('kss');


// Configuration
var paths = require('./../config');



// Loads KSS documentation from /site .scss files and saves into a .json file
// - later this /json file can be processed by swig
gulp.task('styleguide_kss', function() {
  kss.traverse('./site/components', { mask: '*.scss', markdown: true }, function(err, styleguide) {
    if (err) throw err;
    fs.writeFileSync('styleguide/kss.json', JSON.stringify(styleguide.section()));
  });
});
