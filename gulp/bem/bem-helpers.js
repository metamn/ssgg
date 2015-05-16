// BEM helpers
//


// Settings
//
var htmlExt = '.html.swig';
var scssExt = '.scss';



// Plugins
//
var fs = require('fs');
var mkdirp = require('mkdirp');



// Create a folder
var makeFolder = function(path) {
  mkdirp(path, function (err) {
    if (err) throw err;
    console.log('Dir ok');
  });
}


// Create a file with content
var makeFile = function(file, content) {
  fs.writeFile(file, content, function(err) {
    if (err) {
      console.log("Error creating file: " + file);
    } else {
      console.log("File ok");
    }
  });
}


// Create files with content
// - path is the file to be created without extension
// - klass is the HTML class name
var makeFiles = function(path, klass) {
  makeFile(path + htmlExt, '< class="' + klass + '">');

  // For elements and modifiers we have a classname containing the parent, like 'header header__logo'
  // - in this case the first class name must be removed to name the mixin properly, ie @mixin header__logo {}
  makeFile(path + scssExt, "@mixin " + getLastItem(klass, ' ') + " {}");
}



// Create unique classname(s) according to BEM standards
var makeClass = function(object, item, parent, parent2) {
  switch (object) {
    case 'block':
      return item;
      break;
    case 'element':
      return parent + ' ' + parent + '__' + item;
      break;
    case 'modifier-for-block':
      return parent + ' ' + parent + '--' + item;
      break;
    case 'modifier-for-element':
      return parent2 + parent + ' ' + parent2 + parent + '--' + item;
  }
}



// Get the last (nth) substring of a string
// - ex: 'components/framework', '/' => framework
// - ex: 'header header__logo', ' ' => header__logo
// - ex: 'header/__logo', '/', 2 => header
var getLastItem = function(str, separator, nth) {
  if (typeof(nth) === "undefined") { nth = 1; }

  splits = str.split(separator);
  return splits[splits.length - nth];
}



module.exports = {
  makeFolder: makeFolder,
  makeFile: makeFile,
  makeFiles: makeFiles,
  makeClass: makeClass,
  getLastItem: getLastItem
};
