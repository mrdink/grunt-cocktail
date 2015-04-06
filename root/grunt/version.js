module.exports = {
  prod: {
    options: {
      format: true,
      length: 32,
      manifest: 'assets/manifest.json',
      querystring: {
        style: '<%= grunt.configs.package.name %>-css',
        script: '<%= grunt.configs.package.name %>-js'
      }
    },
    files: {
      'inc/assets.php': ['assets/{css,js}/{main,ie,font-awesome,scripts}.min.{css,js}']
    }
  }
};
