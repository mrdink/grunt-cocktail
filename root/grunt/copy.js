/**
 * grunt-contrib-copy
 *
 * Copy files and folders
 *
 * @link https://www.npmjs.com/package/grunt-contrib-copy
 */
module.exports = {
  /**
   * Copies fontawesome from bower to specified dir
   */
  fonts: {
    expand: true,
    flatten: true,
    filter: 'isFile',
    src: ['bower_components/fontawesome/fonts/**'],
    dest: 'assets/fonts/'
  },
  /**
   * Copies ormalize.css to Sass dir and renames to normalize.scss
   */
  normalize: {
    src: ['bower_components/normalize.css/normalize.css'],
    dest: 'sass/_normalize.scss'
  }
};
