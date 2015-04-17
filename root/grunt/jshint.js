/**
 * grunt-contrib-jshint
 *
 * Validate files with JSHint.
 *
 * @link https://www.npmjs.com/package/grunt-contrib-jshint
 */
module.exports = {
  options: {
    bitwise: true,
    browser: true,
    curly: true,
    eqeqeq: true,
    eqnull: true,
    esnext: true,
    immed: true,
    jquery: true,
    latedef: true,
    newcap: true,
    noarg: true,
    node: true,
    strict: false,
    trailing: true,
    undef: true,
    globals: {
      jQuery: true,
      alert: true,
      google: false,
      wp: false
    }
  },
  all: [
    'Gruntfile.js',
    'assets/js/*.js',
    '!assets/js/scripts.js',
    '!assets/js/ie.js',
    '!assets/**/*.min.*'
  ]
};
