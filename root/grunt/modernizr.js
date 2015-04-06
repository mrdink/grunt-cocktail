module.exports = {
  dev: {
    devFile: 'bower_components/modernizr/modernizr.js',
    outputFile: 'assets/js/vendor/modernizr.js',
    shiv : true,
    parseFiles: true,
    uglify: false,
    files: {
      src: [
        ['assets/js/scripts.js'],
        ['assets/css/main.css']
      ]
    }
  },
  prod: {
    devFile: 'bower_components/modernizr/modernizr.js',
    outputFile: 'assets/js/vendor/modernizr.min.js',
    shiv : true,
    parseFiles: true,
    uglify: true,
    files: {
      src: [
        ['assets/js/scripts.min.js'],
        ['assets/css/main.min.css']
      ]
    }
  }
};
