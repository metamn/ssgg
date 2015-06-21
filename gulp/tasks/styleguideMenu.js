// Styleguide Menu
//
// - create a menu to display styleguide entries for 'Framework' and 'Project' BEM folders
// - the menu will be stored into a .html file and copied to a special styleguide folder
//



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
