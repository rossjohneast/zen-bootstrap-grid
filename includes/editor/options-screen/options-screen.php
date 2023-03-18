<?php

//At FE website you can use values like get_option( 'zenbsgb_op_location' ); in the theme...

class WordCountAndTimePlugin {
    function __construct()
    {
        add_action('admin_menu', array($this, 'adminPage'));
        add_action('admin_init', array($this, 'settings'));
    }

    //Register settings in DB
    function settings(){
        add_settings_section( 'zenbsgb_op_first_section', 'Title text here', null, 'zenbsgridblocks-options-settings-page' );
        
        //Build HTML
        add_settings_field( 'zenbsgb_op_location', 'Display location', array($this, 'locationHTML'), 'zenbsgridblocks-options-settings-page', 'zenbsgb_op_first_section' );
        //Reg in DB
        register_setting( 'customoptionsplugin', 'zenbsgb_op_location', array('sanitize_callback' => array($this, 'sanitizeLocation'), 'default' => '0') );

        add_settings_field( 'zenbsgb_op_headline', 'Headline Text', array($this, 'headlineHTML'), 'zenbsgridblocks-options-settings-page', 'zenbsgb_op_first_section' );
        register_setting( 'customoptionsplugin', 'zenbsgb_op_headline', array('sanitize_callback' => 'sanitize_text_field', 'default' => 'Post Statistics') );

        add_settings_field( 'zenbsgb_op_trueorfalse', 'Disable Core Blocks (Button, Columns)', array($this, 'trueorfalseHTML'), 'zenbsgridblocks-options-settings-page', 'zenbsgb_op_first_section' );
        register_setting( 'customoptionsplugin', 'zenbsgb_op_trueorfalse', array('sanitize_callback' => 'sanitize_text_field', 'default' => '1') );
    }

    //Custom validation example
    function sanitizeLocation($usersInputVal){
        if($usersInputVal != '0' && $usersInputVal != '1'){
            //Relates to, generic slug-anything, message to user
            add_settings_error( 'zenbsgb_op_location', 'zenbsgb_op_location_error', 'Location must be beginning or end');
            return get_option( 'zenbsgb_op_location' );
        }
        return $usersInputVal;
    }

    function trueorfalseHTML(){ ?>
    <!-- get_option compares to value eg 1, if true then is marked checked -->

        <input type="checkbox" name="zenbsgb_op_trueorfalse" value="1" <?php checked(get_option('zenbsgb_op_trueorfalse'), 1); ?>></input>
    
    <?php }

    function headlineHTML(){ ?>
        <!-- //esc_attr is a WordPress security function when putting data into html -->
        <input type="text" name="zenbsgb_op_headline" value="<?php echo esc_attr( get_option( 'zenbsgb_op_headline') );  ?>">

    <?php 
    
    




}




    function locationHTML(){ ?>
    <!-- get_option compares to value eg 1, if true then is marked selected -->

        <!-- //No performance hit from using get_option multiple times, values are stored in memeory -->
        <select name="zenbsgb_op_location">
            <option value="0" <?php selected( get_option( 'zenbsgb_op_location', '0' ) ) ?>>Beginning of post</option>
            <option value="1" <?php selected( get_option( 'zenbsgb_op_location', '1' ) ) ?>>End of post</option>
        </select>

    <?php }

    function adminPage(){
        add_options_page( 'Zen BS Grid settings', 'Theme Zen settings','manage_options','zenbsgridblocks-options-settings-page', array($this, 'ourHTML'));
    }
    

    //Options.php standard WP function
    function ourHTML(){ ?>

        <div class="wrap">
            <h1>Theme Zen Bootstrap Grid settings</h1>

            <form action="options.php" method="POST">

                <?php
                    //Adds hidden HTML fields, nonce value, action value, handles security and permissions
                    settings_fields( 'customoptionsplugin' );
                    do_settings_sections( 'zenbsgridblocks-options-settings-page' );
                    submit_button();
                ?>

            </form>

        </div>


        <?php
        }

}

$wordCountAndTimePlugin = new WordCountAndTimePlugin();






?>