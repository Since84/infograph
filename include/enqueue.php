<?php

/*
 *	Enqueue all Scripts for Infogra.ph
 */

	function infograph_enqueue() {
		wp_enqueue_script( 'owl', get_stylesheet_directory_uri()."/script/external/owl.carousel.min.js", array('jquery') );
		wp_enqueue_script( 'site', get_stylesheet_directory_uri()."/script/site.js", array('jquery', 'backbone', 'underscore', 'smooth-scroll') );

		wp_enqueue_style( 'owl_animate', get_stylesheet_directory_uri()."/style/owl/animate.css" );
		wp_enqueue_style( 'owl_carousel', get_stylesheet_directory_uri()."/style/owl/owl.carousel.css" );
		wp_enqueue_style( 'owl_theme', get_stylesheet_directory_uri()."/style/owl/owl.theme.css" );
		wp_enqueue_style( 'owl_transitions', get_stylesheet_directory_uri()."/style/owl/owl.transitions.css" );
		wp_enqueue_style( 'site', get_stylesheet_directory_uri()."/style.css", array('spark_css') );

	}

	add_action('wp_enqueue_scripts', 'infograph_enqueue');