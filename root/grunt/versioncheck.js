/**
 * grunt-version-check
 *
 * Checks if your NPM or Bower dependencies are out of date.
 *
 * Run grunt versioncheck
 *
 * @link https://www.npmjs.com/package/grunt-version-check
 */
module.exports = {
  options: {
    skip: ['semver', 'npm', 'lodash'],
    hideUpToDate: false
  }
};
