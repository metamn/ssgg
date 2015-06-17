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




  // The global KSS file
  // - it contains all source code documentation from /site
  kss_src: '../../styleguide/kss.json'
}
