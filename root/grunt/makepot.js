/**
 * grunt-wp-i18n
 *
 * Internationalize WordPress themes and plugins.
 *
 * @link https://www.npmjs.com/package/grunt-wp-i18n
 */
module.exports = {
  prod: {
    options: {
      domainPath: '/languages/',
      potFilename: '<%= grunt.configs.package.name %>.pot',
      type: 'wp-theme'
    }
  }
};
