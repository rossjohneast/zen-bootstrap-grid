<?php
//Check wordpress is using version 5 or higher before activating the plugin
function zenbsgridblocks_activate_plugin(){
    if(version_compare( get_bloginfo('version'), '5.0' , '<' )){
        wp_die( __("You must update WordPress to use this plugin.", 'zenbsgridblocks') );
    }
}

?>