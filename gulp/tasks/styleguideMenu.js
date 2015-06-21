// Styleguide Menu


// Plugins
var gulp = require('gulp'),
    fs = require('fs'),
    makeUL = require('../utils/makeUL'),
    dirTree = require('../utils/dirTree');


// Configuration
var paths = require('./../config');


// - create html menu for styleguide
gulp.task('styleguideMenu', function() {
  var json = dirTree(paths.styleguide_menu_framework);
  var menu = makeUL([json]);
  fs.writeFileSync(paths.styleguide_menu_framework_dest, menu);

  json = dirTree(paths.styleguide_menu_project);
  menu = makeUL([json]);
  fs.writeFileSync(paths.styleguide_menu_project_dest, menu);
});
