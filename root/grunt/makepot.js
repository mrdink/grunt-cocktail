module.exports = {
  prod: {
    options: {
      domainPath: '/languages/',
      potFilename: '<%= grunt.configs.package.name %>.pot',
      type: 'wp-theme'
    }
  }
};
