// Transforms a JSON file into nested <ul> menu
// - http://jsfiddle.net/BvDW3/


// Plugins
var inflection = require('inflection');


function makeLI(elem) {
    var html = [];

    // decide if this is a folder or a link
    var klass = 'folder';
    for (var i = 0; i < elem.children.length; i++ ) {
      if (elem.children[i].type == 'file') {
        klass = 'file';
      }
    }


    html.push('<li class="' + klass + ' menu-item-' + elem.name + '">');


    // prepare data
    if (elem.path) {
      title = inflection.humanize(elem.name.replace('--', '').replace('__', '').replace(/-/g, ' '));
      link = elem.path.replace('site/components/', '{{ site.url }}')
      html.push('<div>');
    }

    if (elem.children && (klass == 'folder')) {
      html.push(title + '</div>');
      html.push(makeUL(elem.children));
    } else {
      html.push('<a class="link" title="' + title + '" href="' + link + '"><span data-hover="' + title + '">' + title + '</span></a>');
    }

    html.push('</li>');
    return html.join("\n");
}



function makeUL(lst) {
  var html = [];
  html.push('<ul>');

  for (var i = 0; i < lst.length; i++ ) {
    if (lst[i].type == 'folder')
      html.push(makeLI(lst[i]));
  }

  html.push('</ul>');
  return html.join("\n");
}


module.exports = makeUL;
