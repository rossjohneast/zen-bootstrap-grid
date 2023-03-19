<?php

//Add custom back end editor CSS styles for gutenberg blocks
function add_custom_block_editor_styles() {
    add_theme_support('editor-styles');
    add_editor_style(plugins_url('/includes/editor/block-editor.css', ZEN_BS_GRID_BLOCKS_PLUGIN_URL));
}

add_action('after_setup_theme', 'add_custom_block_editor_styles');

//Add the Main Bootstrap stylsheet for styling elements in the dashboard/Gutenberg
function add_bs5__editor_styles() {
    add_theme_support('editor-styles');
    add_editor_style(plugins_url('/assets/css/bootstrap-5/bootstrap.css', ZEN_BS_GRID_BLOCKS_PLUGIN_URL));
}

add_action('after_setup_theme', 'add_bs5__editor_styles');


//Load the front-end ONLY CSS
function zenbsgridblocks_enqueue_scripts(){
    wp_register_style('zenbsgridblocks_fe_main_css', plugins_url('/assets/css/fe-main.css', ZEN_BS_GRID_BLOCKS_PLUGIN_URL));
    wp_enqueue_style('zenbsgridblocks_fe_main_css');
}

?>