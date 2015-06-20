// Commands
//


// Modules
//
var helpers = require('./bem-helpers');


// Create a level
// - if parents are not existent the file and the folder structure will be created anyway
var makeLevel = function(path) {
  helpers.makeFolder(path);
}



// Create a block
// - if parents are not existent the file and the folder structure will be created anyway
// - ex. test header => test/header/header.html.swig, test/header/header.scss
var makeBlock = function(path, name) {
  // test/header
  new_path = path + '/' + name;
  helpers.makeFolder(new_path);

  // test/header/header.*
  new_file = new_path + '/' + name;
  klass = helpers.makeClass('block', name, '');
  helpers.makeFiles(new_file, klass);
}


// Create an Element
// - it has to have a parent already, ie <path> should exist
var makeElement = function(path, name) {
  // header/__logo
  new_path = path + '/__' + name;
  helpers.makeFolder(new_path);

  // header/__logo/header__logo.*
  parent = helpers.getLastItem(path, '/');
  new_file = new_path + '/' + parent + '__' + name;
  klass = helpers.makeClass('element', name, parent);
  helpers.makeFiles(new_file, klass);
}


// Create a Modifier
// - it has to have a parent already, ie <path> should exist
// - Modifiers for blocks are different from modifiers for elements
var makeModifier = function(path, name) {
  // header/--black
  new_path = path + '/--' + name;
  helpers.makeFolder(new_path);

  parent = helpers.getLastItem(path, '/');

  // Modifier for Element
  if (parent.indexOf('__') !== -1 ) {
    parent2 = helpers.getLastItem(path, '/', 2);
    new_file = new_path + '/' + parent2 + parent + '--' + name;
    klass = helpers.makeClass('modifier-for-element', name, parent, parent2);
    helpers.makeFiles(new_file, klass);
  } else {
    // Modifier for Block
    new_file = new_path + '/' + parent + '--' + name;
    klass = helpers.makeClass('modifier-for-block', name, parent);
    helpers.makeFiles(new_file, klass);
  }
}




module.exports = {
  makeLevel: makeLevel,
  makeBlock: makeBlock,
  makeElement: makeElement,
  makeModifier: makeModifier,
};
