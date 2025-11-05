<?php
/*
Plugin Name: CAWeb Divi Extension: Modules
Plugin URI:
Description: CAWeb Modules 
Version:     1.0.0
Author:      CAWebPublishing
Author URI:  https://github.com/Danny-Guzman/caweb-divi-extension/
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: caweb-divi-extension
Domain Path: /languages

CAWeb Divi Extension is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.

CAWeb Divi Extension is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with D5 Module Extension Example. If not, see https://www.gnu.org/licenses/gpl-2.0.html.
*/

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

// Setup constants.
define( 'CAWEB_DIVI_EXT_DIR', str_replace( '\\', '/', __DIR__ . '/' ) );
define( 'CAWEB_DIVI_EXT_URL', site_url( preg_replace( '/(.*)\/wp-content/', '/wp-content', CAWEB_DIVI_EXT_DIR ) ) );

/** Divi 4 Actions */
add_action( 'et_builder_ready', 'caweb_divi_extension_initialize_d4_modules' );
add_action( 'wp_enqueue_scripts', 'caweb_divi_extension_enqueue_d4_vb_scripts' );

/**
 * Register all Divi 4 modules.
 *
 * @since ??
 */
function caweb_divi_extension_initialize_d4_modules() {
	$caweb_module_files = glob( CAWEB_DIVI_EXT_DIR . '/divi-4/src/modules/*/*.php' );

	foreach ( (array) $caweb_module_files as $caweb_module_file ) {
		require_once $caweb_module_file;
	}
}

/**
 * Enqueue Divi 4 Visual Builder Assets
 *
 * @since ??
 */
function caweb_divi_extension_enqueue_d4_vb_scripts() {
	if ( et_core_is_fb_enabled() ) {
		$plugin_dir_url = plugin_dir_url( __FILE__ );
		wp_enqueue_script(
			'caweb-divi4-vb',
			"{$plugin_dir_url}/build/bundle4.js",
			array( 'react', 'jquery' ),
			'1.0.0',
			true
		);
	}
}
