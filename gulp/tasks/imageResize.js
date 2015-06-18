// Image resize

// Plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    onError = require('../utils/onError'),

    rename = require('gulp-rename'),
    data = require('gulp-data'),
    fs = require('fs'),
    imageResize = require('gulp-image-resize');


// Configuration
var paths = require('./../config');



// Resize a single image with ImageMagick
var _image_resize = function(file, size, name) {
  console.log("Resizing " + file + " height to " + size);
  gulp.src(file)
    .pipe(plumber({errorHandler: onError}))
    .pipe(imageResize({
      height : size,
      sharpen: true,
      imageMagick: true
    }))
    .pipe(rename(function (path) { path.basename += "_" + name; }))
    .pipe(gulp.dest(paths.image_resize_dest));
}


// Resize a bunch of images
var _image_batch_resize = function(files, retina, retina_name) {
  return gulp.src(files)
    .pipe(plumber({errorHandler: onError}))
    .pipe(data(function(file) {
      // Get the associated JSON file
      splits = file.path.split('.');
      json_file = splits[0] + '.json';
      if (fs.existsSync(json_file)) {
        json = require(json_file);
        sizes = json.image_sizes;
        for (i in sizes) {
          _image_resize(file.path, sizes[i].height * retina, sizes[i].name + retina_name);
        }
      }
    }))
}


// Image resize
// - create different images for different devices
gulp.task('image_resize', function() {
  _image_batch_resize(paths.images_resize_src, 1, '');
});


// Retina images
// - create 2x images for different devices
gulp.task('image_resize_2x', function() {
  _image_batch_resize(paths.images_resize_src, 2, '2x');
});