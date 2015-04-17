/**
 * Below is the aliases for each task that is run.
 * By running `grunt`, `grunt dev` will be run.
 */
module.exports = {
  'default': ['dev'],
  /**
   * Task to compile stylesheets
   */
  'styles': [
    'sass',
    'autoprefixer',
    'csscomb',
    'cssjanus'
  ],
  /**
   * Task to compile scripts
   */
  'scripts': [
    'jshint',
    'uglify:ie',
    'concat'
  ],
  /**
   * `grunt dev`  - runs all tasks needed for development
   */
  'dev': [
    'clean',
    'copy',
    'styles',
    'scripts',
    'modernizr:dev',
    'notify:dev'
  ],
  /**
   * `grunt prod` - runs dev as well as minifies production files
   */
  'prod': [
    'dev',
    'modernizr:prod',
    'cssmin',
    'uglify',
    'makepot',
    'version',
    'notify:prod'
  ],
  /**
   * `grunt package` - runs prod as well as copies production files
   * into /dist and creates a zip
   */
  'package': [
    'prod',
    'rsync:dist',
    'compress',
    'notify:package'
  ],
  /**
   * `grunt deploy` - runs prod and deploys to the specified server set in
   * /grunt/rsync.js
   */
  'deploy': [
    'prod',
    'rsync',
    'notify:deployed'
  ]
};
