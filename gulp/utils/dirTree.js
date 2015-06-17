// Maps a folder structure into a JSON file
// - http://stackoverflow.com/questions/11194287/convert-a-directory-structure-in-the-filesystem-to-json-with-node-js


// Plugins
var fs = require('fs'),
    path = require('path');


function dirTree(filename) {
  var stats = fs.lstatSync(filename);
  var info = { path: filename, name: path.basename(filename) };

  if (stats.isDirectory()) {
    info.type = 'folder';
    info.children = fs.readdirSync(filename).map(function(child) {
      return dirTree(filename + '/' + child);
    });
  } else {
    info.type = 'file';
  }

  return info;
}


module.exports = dirTree; 
