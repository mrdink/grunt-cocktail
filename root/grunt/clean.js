/**
 * grunt-contrib-clean
 *
 * Clean files and folders.
 *
 * @link https://www.npmjs.com/package/grunt-contrib-clean
 */
module.exports = {
  dev: {
    src: [
      'assets/css/*',
      'dist/*',
      'assets/fonts/*',
      'assets/js/*.js',
      'assets/js/vendor/*',
      '!assets/js/_*.js'
    ]
  }
};
