module.exports = {
  options: {
    sourceMap: true,
    imagePath: '../img',
    includePaths: [
      'bower_components/bourbon/app/assets/stylesheets',
      'bower_components/neat/app/assets/stylesheets',
      'bower_components/bitters/app/assets/stylesheets'
    ]
  },
  dev: {
    files: {
      'assets/css/main.css': ['sass/main.scss'],
      'assets/css/font-awesome.css': ['bower_components/fontawesome/scss/font-awesome.scss'],
      'assets/css/editor-style.css': ['sass/editor-style.scss']
    }
  }
};
