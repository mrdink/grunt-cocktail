module.exports = {
  prod: {
    files: {
      'assets/js/scripts.min.js': '<%= vars.jsFileList %>',
    }
  },
  ie: {
    files: {
      'assets/js/ie.js': [
        'bower_components/respond/dest/respond.src.js',
        'bower_components/selectivizr/selectivizr.js'
      ]
    }
  }
};
