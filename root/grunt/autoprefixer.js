/**
 * grunt-autoprefixer
 *
 * Parse CSS and add vendor-prefixed CSS properties using
 * the Can I Use database. Based on Autoprefixer.
 *
 * @link https://www.npmjs.com/package/grunt-autoprefixer
 */
module.exports = {
  options: {
    browsers: [
      'last 2 versions',
      'ie 8',
      'ie 9',
      'android 2.3',
      'android 4',
      'opera 12'
    ]
  },
  dev: {
    src: 'assets/css/main.css'
  }
};
