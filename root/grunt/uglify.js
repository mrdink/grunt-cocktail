/**
 * grunt-contrib-uglify
 *
 * Minify files with UglifyJS.
 *
 * @link https://www.npmjs.com/package/grunt-contrib-uglify
 */
module.exports = {
  prod: {
    files: {
      'assets/js/scripts.min.js': '<%= vars.jsFileList %>',
    }
  },
  /**
   * Used for < IE9
   */
  ie: {
    files: {
      'assets/js/ie.js': [
        'bower_components/respond/dest/respond.src.js',
        'bower_components/selectivizr/selectivizr.js'
      ]
    }
  }
};
