<?php
// phpcs:disable
/**
 * Plugin Name: Zen Bootstrap Grid Blocks
 * Description:       Gutenberg Bootstrap 5 Grid Blocks from Theme-Zen.
 * Version:           1.0.0
 * Author:            Theme Zen
 * Author URI:        https://www.theme-zen.com/
 * Text Domain: zenbsgridblocks
 */
// Exit if accessed directly.

if(!function_exists('add_action')){
    echo "Plugin disabled, WordPress not loaded.";
    exit;
}

//SETUP

//Create a constant for referencing the plugin when enqueued
define('ZEN_BS_GRID_BLOCKS_PLUGIN_URL', __FILE__);

//INCLUDES
include('includes/activate.php');
include('includes/front/enqueue.php');
include('includes/editor/enqueue.php');
include('blocks/enqueue.php');

//HOOKS
register_activation_hook( __FILE__, 'zenbsgridblocks_activate_plugin' );
add_action('wp_enqueue_scripts', 'zenbsgridblocks_enqueue_scripts', 100);
add_action('enqueue_block_editor_assets', 'zenbsgridblocks_enqueue_block_editor_assets');
add_action('enqueue_block_assets', 'zenbsgridblocks_enqueue_block_assets');

//Check for updates to the plugin...
