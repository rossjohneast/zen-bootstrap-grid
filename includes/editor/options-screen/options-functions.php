<?php   

//Disable core GB blocks
//Unregister the column, and button
function disableCoreGBBlocks(){

    $isOptionTrue = esc_attr( get_option( 'zenbsgb_op_trueorfalse') );

    if ($isOptionTrue == 1) {

        //Registers a JS file which removes core blocks
        function my_plugin_deny_list_blocks() {
            wp_enqueue_script(
                'my-plugin-deny-list-blocks',
                plugins_url( '/assets/js/editor.js', dirname(__DIR__, 2) ),
                array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' )
            );
        }
        add_action( 'enqueue_block_editor_assets', 'my_plugin_deny_list_blocks' );

    }

}

disableCoreGBBlocks();

?>