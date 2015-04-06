module.exports = {
  assets: {
    keepSpecialComments: 0,
    expand: true,
    cwd: 'assets/css/',
    src: ['*.css', '!*.min.css', '!editor-style.css'],
    dest: 'assets/css/',
    ext: '.min.css'
  }
};