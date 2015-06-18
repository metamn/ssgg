// Configuration for Gulp tasks


module.exports = {
  // Site url
  // - used by the sitemap generator
  site_url: 'site.url',



  // The destination folder where all the generated files will be copied
  // - the contents of this folder will be uploaded to a static web server like Github Pages
  dest: 'dist',



  // where to resize images
  image_resize_dest: 'site/assets/images/resized',

  // images to resize and optimize
  images_resize_src: 'site/assets/images/*.{png,jpg,gif}',

  // images to move
  images_src: 'site/assets/images/*.{png,jpg,gif}',

  // images destination
  images_dest: 'dist/assets/images',

  



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





  // Styleguide menu for BEM framework items
  styleguide_menu_framework: 'site/components/framework',

  // Styleguide menu for BEM project items
  styleguide_menu_project: 'site/components/project',

  // Styleguide menu destination file for BEM framework
  styleguide_menu_framework_dest: 'styleguide/components/project/styleguide-menu/__framework/styleguide-menu__framework.html.swig',

  // Styleguide menu destination file for BEM project
  styleguide_menu_project_dest: 'styleguide/components/project/styleguide-menu/__project/styleguide-menu__project.html.swig',




  // Which folders to copy from /site to /styleguide
  styleguide_folders_copy: ['site/components/framework/**/**/*','site/components/project/**/**/*'],

  // Which folders to remove from /styleguide
  styleguide_folders_remove: ['styleguide/components/pages/framework/**/**/*','styleguide/components/pages/project/**/**/*'],




  // The global KSS file
  // - it contains all source code documentation from /site
  kss_src: '../../styleguide/kss.json'
}
