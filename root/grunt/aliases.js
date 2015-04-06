module.exports = {
  'default': ['dev'],
  'styles': [
    'sass',
    'autoprefixer',
    'csscomb',
    'cssjanus'
  ],
  'scripts': [
    'jshint',
    'uglify:ie',
    'concat'
  ],
  'dev': [
    'clean',
    'copy',
    'styles',
    'scripts',
    'modernizr:dev',
    'notify:dev'
  ],
  'prod': [
    'dev',
    'modernizr:prod',
    'cssmin',
    'uglify',
    'makepot',
    'version',
    'notify:prod'
  ],
  'package': [
    'prod',
    'rsync:dist',
    'compress',
    'notify:package'
  ],
  'deploy': [
    'prod',
    'rsync',
    'notify:deployed'
  ]
};
