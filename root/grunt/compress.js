module.exports = {
  prod: {
    options: {
      mode: 'zip',
      archive: './<%= grunt.configs.package.name %>.<%= grunt.configs.package.version %>.zip'
    },
    expand: true,
    cwd: 'dist/',
    src: ['**/*'],
    dest: '<%= grunt.configs.package.name %>/'
  }
};
