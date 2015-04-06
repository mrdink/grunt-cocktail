module.exports = {
  fonts: {
    expand: true,
    flatten: true,
    filter: 'isFile',
    src: ['bower_components/fontawesome/fonts/**'],
    dest: 'assets/fonts/'
  },
  normalize: {
    expand: true,
    flatten: true,
    filter: 'isFile',
    src: ['bower_components/normalize.css/normalize.css'],
    dest: 'assets/css/'
  }
};
