/**
 * grunt-contrib-concat
 *
 * Concatenate files.
 *
 * Concatenates an array of js files set in /grunt/vars.js
 *
 * @link https://www.npmjs.com/package/grunt-contrib-concat
 */
module.exports = {
  options: {
    separator: ';'
  },
  prod: {
    src: '<%= vars.jsFileList %>',
    dest: 'assets/js/scripts.js'
  }
};
