<?php

//Register scripts

/**
 * Add a block category for "zenbsgridblocks" if it doesn't exist already.
 */
function my_zenbsgridblocks_block_category( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'zenbsgridblocks',
				'title' => __( 'Zen Bootstrap Grid', 'zenbsgridblocks' ),
			),
		)
	);
}
add_filter( 'block_categories', 'my_zenbsgridblocks_block_category', 10, 2);

// Update CSS within in Admin
function admin_style() {
    wp_enqueue_style('admin-styles', plugins_url('/assets/css/admin-dashboard-styles.css', ZEN_BS_GRID_BLOCKS_PLUGIN_URL));
  }
  add_action('admin_enqueue_scripts', 'admin_style');

//Bundle assets
function zenbsgridblocks_enqueue_block_editor_assets(){

    wp_register_script(
        'zenbsgridblocks_blocks_bundle',
        plugins_url('/blocks/build/index.js', ZEN_BS_GRID_BLOCKS_PLUGIN_URL),
        [ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor', 'wp-api' ],
        plugin_dir_path( ZEN_BS_GRID_BLOCKS_PLUGIN_URL ) . '/blocks/build/index.js' 
    );

    wp_enqueue_script( 'zenbsgridblocks_blocks_bundle' );

}

add_action('admin_enqueue_scripts','zenbsgridblocks_enqueue_block_editor_assets');

//Register Styles
function zenbsgridblocks_enqueue_block_assets(){
    wp_register_style(
        'zenbsgridblocks_blocks',
        plugins_url('/blocks/dist/blocks-main.css', ZEN_BS_GRID_BLOCKS_PLUGIN_URL)
    );
    wp_enqueue_style( 'zenbsgridblocks_blocks' );
}


//Register editor and front end block styles
function zenbsgridblocks_enqueue_block_assets_ed_and_fe() 
{
    wp_enqueue_style( 'zenbsgridblocks_block_editor_and_fe_styles', plugins_url( '/blocks/dist/blocks-main.css', __FILE__ ) );
}

add_action('block_editor_and_fe_styles', 'zenbsgridblocks_enqueue_block_assets_ed_and_fe');

//Enqueue fonts

// require(plugin_dir_path(__FILE__).'app/latest-post-block/index.php');


//Add font awesome in the dashboard
function fontawesome_dashboard() {
    wp_enqueue_style('fontawesome', 'https://use.fontawesome.com/releases/v5.8.1/css/all.css', '', '5.8.1', 'all');
 }
 
 add_action('admin_init', 'fontawesome_dashboard');


 /**
 *  Enqueue FontAwesome for backend.
 */
add_action( 'admin_enqueue_scripts', function() {
    wp_enqueue_style('admin-styles', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css');
  } );
  /**
   *  Enqueue FontAwesome for frontend.
   */
  add_action( 'wp_enqueue_scripts', function() {
    wp_register_style( 'wf-fontawesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css', '', $ver = null, $media = 'all' );
    wp_enqueue_style('wf-fontawesome');
  } );


