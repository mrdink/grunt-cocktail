module.exports = {
  prod: {
    files: [{
      progressive: true,
      expand: true,
      cwd: 'assets/',
      src: ['**/*.{png,jpg,gif}'],
      dest: 'assets/'
    }]
  }
};
