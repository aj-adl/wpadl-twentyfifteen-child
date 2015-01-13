<?php 

// New best practice for Child Themes - using wp_enqueue_style 
// rather than an @import in the stylesheet. 

add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-theme-stylesheet', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-theme-stylesheet', get_stylesheet_uri(), array( 'parent-theme-stylesheet' ) );
}

// I choose to inline modernizr in the <head>
// - Best practice according to them
// - Be sure to use a custom build

// An example of outputting inline javascript in the <head>
// Changing the action from 'wp_head' to 'wp_footer' would place it before </body> tag

add_action( 'wp_head', 'BSHP_inline_modernizr', 9 );
function BSHP_inline_modernizr() {
  
  include_once('inc/inline_modernizr.php');

  echo $modernizr;
}

// Adding any Javascript Scripts I would like to register/load
add_action( 'wp_enqueue_scripts', 'BSHP_add_scripts' );
function BSHP_add_scripts() {

  wp_enqueue_script( 'scrollreveal', get_stylesheet_directory_uri() . '/js/scrollReveal.min.js', array(), null, true );

}