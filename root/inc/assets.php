<?php
/**
 * Scripts and stylesheets
 *
 * Enqueue stylesheets in the following order:
 * 1. /theme/assets/css/main.css
 *
 * Enqueue scripts in the following order:
 * 2. /theme/assets/js/vendor/modernizr.min.js
 * 3. /theme/assets/js/scripts.js (in footer)
 *
 */
function {%= prefix %}_scripts() {

	$live_reload 	= false;
	$minification = false;

	/**
	 * The build task in Grunt renames production assets with a hash
	 * Read the asset names from assets-manifest.json
	 */
	if ( true !== $minification ) {
		$assets = array(
			'css'       	=> '/assets/css/main.css',
			'icons'  			=> '/assets/css/font-awesome.css',
			'child'     	=> '/style.css',
			'js'        	=> '/assets/js/scripts.js',
			'modernizr' 	=> '/assets/js/vendor/modernizr.js',
			'livereload'  => '//localhost:35729/livereload.js'
		);
	} else {
		$get_assets = file_get_contents( get_template_directory() . '/assets/manifest.json' );
		$assets     = json_decode($get_assets, true);
		$assets     = array(
			'css'       	=> '/assets/css/main.min.css?' . $assets['assets/css/main.min.css']['hash'],
			'icons'  			=> '/assets/css/font-awesome.min.css?' . $assets['assets/css/font-awesome.min.css']['hash'],
			'child'     	=> '/style.css',
			'js'        	=> '/assets/js/scripts.min.js?' . $assets['assets/js/scripts.min.js']['hash'],
			'modernizr' 	=> '/assets/js/vendor/modernizr.min.js'
		);
	}

	wp_enqueue_style( '{%= prefix %}-css', get_template_directory_uri() . $assets['css'], false, null);
	wp_enqueue_style( '{%= prefix %}-icons', get_template_directory_uri() . $assets['icons'], false, null);

	if ( is_child_theme() ){
		wp_enqueue_style( '{%= prefix %}-child', get_stylesheet_directory_uri() . $assets['child'], false, null);
	}

	if ( is_single() && comments_open() && get_option('thread_comments') ) {
		wp_enqueue_script('comment-reply');
	}

	wp_enqueue_script( 'modernizr', get_template_directory_uri() . $assets['modernizr'], array(), null, false);
	wp_enqueue_script( 'jquery');
	wp_enqueue_script( '{%= prefix %}-js', get_template_directory_uri() . $assets['js'], array(), null, true);

	if ( true == $live_reload ) {
		wp_enqueue_script( 'livereload', $assets['livereload'], '', false, true );
	}
}
add_action('wp_enqueue_scripts', '{%= prefix %}_scripts', 100);
