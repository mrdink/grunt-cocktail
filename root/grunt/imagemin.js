/**
 * grunt-contrib-imagemin
 *
 * Minify images
 *
 * @link https://www.npmjs.com/package/grunt-contrib-imagemin
 */
module.exports = {
  prod: {
    files: [{
      progressive: true,
      expand: true,
      cwd: 'assets/',
      src: ['**/*.{png,jpg,gif}'],
      dest: 'assets/'
    }]
  }
};
