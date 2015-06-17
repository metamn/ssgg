// Site wide configuration

module.exports = {
  // The destination folder where all the generated files will be copied
  // - the contents of this folder will be uploaded to a static web server like Github Pages
  dest: 'dist',



  // Global config.json file
  // - this will be loaded every time a .swig file is compiled
  config_json: '../../site/config.json',

  // Styleguide global config.json file
  // - this will be loaded every time a .swig file is compiled in /styleguide
  styleguide_config_json: '../../styleguide/config.json',



  // Swig source files
  // - they will be all compiled
  swig_src: ['components/**/*.swig'],

  // Swig dest files (same directory)
  // - and put in the same directory where the original .swig file was found
  swig_dest: 'components',




  // .scss file to compile
  scss_src: 'assets/styles/site.scss',

  // .scss file to compile for /styleguide
  styleguide_scss_src: 'assets/styles/styleguide.scss',

  // .css file destination
  scss_dest: 'dist/assets/styles',

  // .css file destination for styleguide
  styleguide_scss_dest: 'dist/styleguide/assets/styles',




  // .js files to concat
  js_src: ['site/components/framework/**/*.js', 'site/components/project/**/*.js', 'site/components/pages/**/*.js'],

  // .js minimized file name
  js_filename: 'site.js',

  // .js file destination
  js_dest: 'dist/assets/scripts',


  // .js files to concat for styleguide
  styleguide_js_src: ['styleguide/components/pages/**/*.js', 'styleguide/components/framework/**/*.js', 'styleguide/components/project/**/*.js'],

  // .js minimized file name for styleguide
  styleguide_js_filename: 'styleguide.js',

  // .js file destination for styleguide
  styleguide_js_dest: 'dist/styleguide/assets/scripts',


  // .js files to move
  js_move_src: 'assets/scripts/*.js',

  // .js files to move destination
  js_move_dest: 'dist/assets/scripts',

  // .js files to move destination for styleguide
  styleguide_js_move_dest: 'dist/styleguide/assets/scripts',




  // .html files to be moved into dest
  html_src: 'components/pages/**/**/*.html',



  // The global KSS file
  // - it contains all source code documentation from /site
  kss_src: '../../styleguide/kss.json'
}
