<?php

// Setup constants.
define( 'CAWEB_DIVI_EXT_MODULES_JSON_PATH', CAWEB_DIVI_EXT_DIR . 'modules-json/' );

/**
 * Requires Autoloader.
 */
require CAWEB_DIVI_EXT_DIR . 'vendor/autoload.php';
require CAWEB_DIVI_EXT_DIR . 'modules/Modules.php';

/** Divi 5 Actions */
add_action( 'divi_visual_builder_assets_before_enqueue_scripts', 'caweb_divi_extension_module_enqueue_vb_scripts' );
add_action( 'wp_enqueue_scripts', 'caweb_divi_extension_module_enqueue_frontend_scripts' );

/**
 * Enqueue style and scripts of Module Extension Example for Visual Builder.
 *
 * @since ??
 */
function caweb_divi_extension_module_enqueue_vb_scripts() {
	if ( et_builder_d5_enabled() && et_core_is_fb_enabled() ) {

		// \ET\Builder\VisualBuilder\Assets\PackageBuildManager::register_package_build(
		// 	[
		// 		'name'   => 'd5-extension-example-modules-builder-bundle-script',
		// 		'version' => '1.0.0',
		// 		'script' => [
		// 			'src' => "{$CAWEB_DIVI_EXT_URL}scripts/bundle.js",
		// 			'deps'               => [
		// 				'divi-module-library',
		// 				'divi-vendor-wp-hooks',
		// 			],
		// 			'enqueue_top_window' => false,
		// 			'enqueue_app_window' => true,
		// 		],
		// 	]
		// );

		// \ET\Builder\VisualBuilder\Assets\PackageBuildManager::register_package_build(
		// 	[
		// 		'name'   => 'd5-extension-example-modules-builder-vb-bundle-style',
		// 		'version' => '1.0.0',
		// 		'style' => [
		// 			'src' => "{$plugin_dir_url}styles/vb-bundle.css",
		// 			'deps'               => [],
		// 			'enqueue_top_window' => false,
		// 			'enqueue_app_window' => true,
		// 		],
		// 	]
		// );
	}
}

/**
 * Enqueue style and scripts of Module Extension Example
 *
 * @since ??
 */
function caweb_divi_extension_module_enqueue_frontend_scripts() {
	wp_enqueue_style( 'caweb-divi-extension-modules-builder-bundle-style', CAWEB_DIVI_EXT_URL . "styles/bundle.css", array(), '1.0.0' );
}
	