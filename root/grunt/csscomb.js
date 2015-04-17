/**
 * grunt-csscomb
 *
 * The grunt plugin for sorting CSS properties in specific order.
 *
 * @link https://www.npmjs.com/package/grunt-csscomb
 */
module.exports = {
  options: {
    config: './.csscomb.json'
  },
  files: {
    'assets/css/main.css': ['assets/css/main.css']
  }
};
