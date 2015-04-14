/**
 * grunt-wp-cocktail
 * https://github.com/mrdink/grunt-wp-cocktail
 *
 * Copyright (c) 2015 Justin Peacock, byjust.in
 * Licensed under the MIT License
 */

'use strict';

// Basic template description
exports.description = 'Create a WordPress theme from Cocktail.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after the question prompts.
exports.after = '';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template
exports.template = function( grunt, init, done ) {
	init.process( {}, [
		// Prompt for these values.
		{
			name   : 'title',
			message: 'Theme Name',
			default: 'Cocktail'
		},
		{
			name   : 'prefix',
			message: 'PHP function prefix (alpha and underscore characters only)',
			default: 'cocktail'
		},
		init.prompt( 'version', '0.1.0' ),
		init.prompt( 'description', 'Cocktail is a starting point. Use Bourbon, Bitters, and Neat to build your next WordPress project.' ),
		{
			name   : 'theme_url',
			message: 'Theme URL',
			default: 'https://github.com/mrdink/wp-cocktail'
		},
		init.prompt( 'author_name', 'Name' ),
		init.prompt( 'author_email', 'you@email.com' ),
		{
			name   : 'author_url',
			message: 'Author URL',
			default: 'https://github.com/mrdink'
		},
	], function( err, props ) {
		props.engines = {
	    "node": ">= 0.10.0"
		};
		props.version = props.version;
		props.devDependencies = {
			"grunt": "^0.4.5",
			"grunt-autoprefixer": "^3.0.0",
			"grunt-contrib-clean": "^0.6.0",
			"grunt-contrib-compress": "^0.13.0",
			"grunt-contrib-concat": "~0.5.0",
			"grunt-contrib-copy": "^0.8.0",
			"grunt-contrib-cssmin": "^0.12.2",
			"grunt-contrib-imagemin": "^0.9.4",
			"grunt-contrib-jshint": "^0.11.1",
			"grunt-contrib-uglify": "^0.9.1",
			"grunt-contrib-watch": "~0.6.1",
			"grunt-csscomb": "^3.0.0",
			"grunt-cssjanus": "^0.2.4",
			"grunt-modernizr": "^0.6.0",
			"grunt-notify": "^0.4.1",
			"grunt-rsync": "^0.6.2",
			"grunt-sass": "^0.18.1",
			"grunt-version-check": "^0.2.1",
			"grunt-wp-assets": "~0.2.6",
			"grunt-wp-i18n": "^0.5.1",
			"load-grunt-config": "^0.17.0",
			"load-grunt-tasks": "^3.0.0",
			"node-sass": "^2.0.1",
			"time-grunt": "^1.0.0",
			"versioncheck": "^2.1.1"
		};

		// Sanitize names where we need to for PHP/JS
		props.name = props.title.replace( /\s+/g, '-' ).toLowerCase();
		// Development prefix (i.e. to prefix PHP function names, variables)
		props.prefix = props.prefix.replace('/[^a-z_]/i', '').toLowerCase();
		// Development prefix in all caps (e.g. for constants)
		props.prefix_caps = props.prefix.toUpperCase();
		// An additional value, safe to use as a JavaScript identifier.
		props.js_safe_name = props.name.replace(/[\W_]+/g, '_').replace(/^(\d)/, '_$1');
		// An additional value that won't conflict with NodeUnit unit tests.
		props.js_test_safe_name = props.js_safe_name === 'test' ? 'myTest' : props.js_safe_name;
		props.js_safe_name_caps = props.js_safe_name.toUpperCase();

		// Files to copy and process
		var files = init.filesToCopy( props );

		console.log( files );

		// Actually copy and process files
		init.copyAndProcess( files, props, {noProcess: ['*.png','assets/img/*','assets/ico/*']} );

		// Generate package.json file
		init.writePackageJSON( 'package.json', props );

		// Done!
		done();
	});
};