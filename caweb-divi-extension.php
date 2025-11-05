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

// Load Divi 4 modules.
require_once CAWEB_DIVI_EXT_DIR . 'divi-4/divi-4.php';

// Load Divi 5 modules.
require_once CAWEB_DIVI_EXT_DIR . 'divi-5/divi-5.php';