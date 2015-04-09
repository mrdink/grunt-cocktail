module.exports = {
  fonts: {
    expand: true,
    flatten: true,
    filter: 'isFile',
    src: ['bower_components/fontawesome/fonts/**'],
    dest: 'assets/fonts/'
  },
  normalize: {
    src: ['bower_components/normalize.css/normalize.css'],
    dest: 'sass/_normalize.scss'
  }
};
