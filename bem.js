#!/usr/bin/env node


// Modules
//
var commands = require('./gulp/bem/bem-commands');



// Command line parser
//
var argv = require('yargs')
  .usage('Usage: $0 <object> <path> <name>')
  .command('object', 'The BEM object to be created. It can be [level, block, element, modifier] or [l, b, e, m]')
  .command('path', 'The parent of the BEM object')
  .command('name', 'The name of BEM object to be created inside <path>.')
  .example('$0 level components/framework', '=> "components/framework"')
  .example('$0 block components/framework header', '=> "components/framework/header/header.html.swig"')
  .example('$0 element header logo', '=> "header/__logo/header__logo.html.swig"')
  .example('$0 modifier header/__logo hover', '=> "header/__logo/--hover/header__logo--hover.html.swig"')
  .example('$0 modifier header black', '=> "header/--black/header--black.html.swig"')
  .demand(2)
  .argv;

var object = argv._[0];
var path = argv._[1];
var name = argv._[2];


switch (object) {
  case 'level':
  case 'l':
    commands.makeLevel(path);
    break;
  case 'block':
  case 'b':
    commands.makeBlock(path, name);
    break;
  case 'element':
  case 'e':
    commands.makeElement(path, name);
    break;
  case 'modifier':
  case 'm':
    commands.makeModifier(path, name);
    break;
  default:
    console.log('Wrong arguments: ' + object);
}
