<?php 
/**
 * Spark Main Template
 * 
 * This is the base for all templates within spark.
 * It includes the global header and footer.
 * The home page will default to this template ( home.php ) unless otherwise configured. 
 * 
 * @link http://codex.wordpress.org/Template_Hierarchy
 *
 * @package Spark
 * @subpackage SparkFifteen
 * @since SparkFifteen 1.0
 */ 
wp_head();

$context = Timber::get_context();

$args = array(
    'showposts' => 1
);
$context['posts'] = Timber::get_posts($args);

$posts = Theme_Theme::processPosts($context['posts']);

///Display Page 
Timber::render( '/views/home.html.twig', $context );

get_footer();
wp_footer();
?>