/**
 * grunt-contrib-watch
 *
 * Run predefined tasks whenever watched file patterns are
 * added, changed or deleted.
 *
 * @link https://www.npmjs.com/package/grunt-contrib-watch
 */
module.exports = {
  sass: {
    files: ['sass/*.scss', 'sass/**/*.scss'],
    tasks: ['styles', 'notify:sass']
  },
  js: {
    files: [
      '<%= vars.jsFileList %>',
      '<%= jshint.all %>'
    ],
    tasks: ['scripts', 'notify:js']
  },
  livereload: {
    options: {
      livereload: true
    },
    files: [
      'assets/css/main.css',
      'assets/js/scripts.js',
      'grunt/*',
      '*.php',
      '**/*.php'
    ]
  }
};
