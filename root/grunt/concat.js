module.exports = {
  options: {
    separator: ';'
  },
  prod: {
    src: '<%= vars.jsFileList %>',
    dest: 'assets/js/scripts.js'
  }
};
