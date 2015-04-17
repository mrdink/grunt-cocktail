/**
 * grunt-sass
 *
 * Compile Sass to CSS using node-sass
 *
 * @link https://www.npmjs.com/package/grunt-sass
 */
module.exports = {
  /**
   * Bourbon and Neat are imported here so we can
   * access them from within the project
   */
  options: {
    sourceMap: true,
    imagePath: '../img',
    includePaths: [
      'bower_components/bourbon/app/assets/stylesheets',
      'bower_components/neat/app/assets/stylesheets'
    ]
  },
  dev: {
    files: {
      'assets/css/main.css': ['sass/main.scss'],
      'assets/css/font-awesome.css': ['bower_components/fontawesome/scss/font-awesome.scss'],
      'assets/css/editor-style.css': ['sass/editor-style.scss']
    }
  }
};
