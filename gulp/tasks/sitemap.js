// Sitemap
//
// - generate the sitemap.xml
//
// Styleguide sitemap

// Plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    onError = require('../utils/onError'),

    sitemap = require('gulp-sitemap');


// Configuration
var paths = require('./../config');


gulp.task('sitemap', function () {
  gulp.src(paths.dest + '/**/*.html')
    .pipe(sitemap({
      siteUrl: paths.site_url
    }))
    .pipe(gulp.dest(paths.dest));
});
