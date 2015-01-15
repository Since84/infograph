<?php

/*
 *	Enqueue all Scripts for Infogra.ph
 */

	function infograph_enqueue() {
		wp_enqueue_script( 'owl', get_stylesheet_directory_uri()."/script/external/owl.carousel.min.js", array('jquery') );
		wp_enqueue_script( 'site', get_stylesheet_directory_uri()."/script/site.js", array('jquery') );
	}

	add_action('wp_enqueue_scripts', 'infograph_enqueue');