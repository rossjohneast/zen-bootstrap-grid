<?php
// phpcs:disable
/**
 * Plugin Name: Zen Bootstrap Blocks
 * Description:       Gutenberg Bootstrap blocks from Theme-Zen.
 * Version:           1.0.2
 * Author:            Theme Zen
 * Author URI:        https://www.theme-zen.com/
 * Text Domain: zenbsblocks
 */
// Exit if accessed directly.

if(!function_exists('add_action')){
    echo "Plugin disabled, WorpPress not loaded.";
    exit;
}

//SETUP

//Create a constant for referencing the plugin when enqueued
define('ZEN_BS_BLOCKS_PLUGIN_URL', __FILE__);

//INCLUDES
include('includes/activate.php');
include('includes/front/enqueue.php');
include('includes/editor/enqueue.php');
include('blocks/enqueue.php');

//HOOKS
register_activation_hook( __FILE__, 'z_activate_plugin' );
add_action('wp_enqueue_scripts', 'z_enqueue_scripts', 100);
add_action('enqueue_block_editor_assets', 'z_enqueue_block_editor_assets');
add_action('enqueue_block_assets', 'z_enqueue_block_assets');

//SHORTCODES


// add_action('admin_enqueue_scripts','z_admin_main_js_init');

// function z_admin_main_js_init() {
//     wp_enqueue_script( 'ava-test-js', plugins_url( '/assets/js/main.js', __FILE__ ));
// }

//Enqueue the front-end ONLY jquery
// add_action('wp_enqueue_scripts','z_fe_main_js_init');

// function z_fe_main_js_init() {
//     wp_enqueue_script( 'fe-zenbsblocks-plugin-js', plugins_url( '/assets/js/fe-main.js', __FILE__ ));
// }

//Enqueue the front-end ONLY jquery, this loads AFTER jquery has loaded
function z_fe_main_js_init(){
    wp_register_script( 
        'fe-zenbsblocks-plugin-js', 
        plugins_url( '/assets/js/fe-main.js', __FILE__ ), 
        array( 'jquery' )
    );
    wp_enqueue_script( 'fe-zenbsblocks-plugin-js' );
}
add_action('wp_enqueue_scripts', 'z_fe_main_js_init');


//Check for updates to the theme
