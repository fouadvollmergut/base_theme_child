<?php 

  // THEME Styles 

  add_action('wp_enqueue_scripts', 'custom_theme_styles', 20);
    
  function custom_theme_styles() {
    error_log(get_stylesheet_directory_uri() . '/scripts/custom_main.css');
    wp_enqueue_style('custom_style', get_stylesheet_directory_uri() . '/scripts/custom_main.css', array(), '1.0.0');
  }

  // THEME Scripts

  add_action('wp_enqueue_scripts', 'custom_theme_scripts', 20);

  function custom_theme_scripts() {
    wp_enqueue_script('custom_script', get_stylesheet_directory_uri() . '/scripts/custom_main.js');
  }


  add_filter( 'gdymc_modules_folder', 'gdymc_custom_folder' );

  function gdymc_custom_folder($module_folders) {
    array_push($module_folders, get_stylesheet_directory() . '/custom_modules');
    return $module_folders;
  }