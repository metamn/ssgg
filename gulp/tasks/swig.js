// SWIG


// Plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),

    swig = require('gulp-swig'),
    data = require('gulp-data'),
    fs = require('fs'),
    fm = require('front-matter'),
    onError = require('../utils/onError');;


// Configuration
var paths = require('./../config');


// Compile swig files into html, scss or js. Each swig file has two extensions like colors.scss.swig or page.html.swig
// - process YAML Front Matter data, if any
// - load JSON data for every file. It looks for a same-name json file. colors.scss.swig will look for colors.scss.json
// - make available all JSON data from /site to /styleguide
var _swig = function(source, dest, config, grabJSON) {
  return gulp.src(source)
    .pipe(plumber({errorHandler: onError}))

    // use JSON definitions from /site in /styleguide
    .pipe(data(function(file) {
      if (grabJSON) {
        components = file.path.replace('styleguide/components/pages', 'site/components');
        json = components.split('.')[0] + '.scss.json';
        if (fs.existsSync(json)) {
          return require(json);
        }
      }
    }))

    // use YAML Front Matter
    .pipe(data(function(file) {
      var content = fm(String(file.contents));
      file.contents = new Buffer(content.body);
      return content.attributes;
    }))

    // load JSONs
    .pipe(swig({
      // Load a same-name JSON file if found
      load_json: true,
      defaults: {
        cache: false,
        locals: {
          // Load site-wide JSON settings
          site: require(config),
          // Load site-wide KSS file
          kss: require(paths.kss_src)
        }
      }
    }))

    .pipe(rename({ extname: '' }))
    .pipe(gulp.dest(dest));
}


// Task for compiling .swig files from /site
gulp.task('swig', function() {
  _swig('site/' + paths.swig_src, 'site/' + paths.swig_dest, paths.config_json);
});

// Task for compiling .swig files from /styleguide
gulp.task('swigSg', function() {
  _swig('styleguide/' + paths.swig_src, 'styleguide/' + paths.swig_dest, paths.styleguide_config_json, true);
});
