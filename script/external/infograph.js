/*====================================
=            ON DOM READY            =
====================================*/
$(function() {

    // Toggle Nav on Click
    $('.toggle-nav').click(function() {
        // Calling a function in case you want to expand upon this.
        toggleNav();
    });


});


/*========================================
=            CUSTOM FUNCTIONS            =
========================================*/
function toggleNav() {
    if ($('#sitewrap').hasClass('show-nav')) {
        // Do things on Nav Close
        $('#sitewrap').removeClass('show-nav');
    } else {
        // Do things on Nav Open
        $('#sitewrap').addClass('show-nav');
    }

    //$('#site-wrapper').toggleClass('show-nav');
}

/* Esc Key Closes Nav */

$(document).keyup(function(e) {
    if (e.keyCode == 27) {
        if ($('#sitewrap').hasClass('show-nav')) {
            // Assuming you used the function I made from the demo
            toggleNav();
        }
    } 
});

/* Toggle Sharing Bar */

$(window).scroll(function () {
    if ( $(this).scrollTop() > 100 && !$('#share-bar').hasClass('open') ) {
        $('#share-bar').addClass('open');
        $('#share-bar').slideDown();
    } else if ( $(this).scrollTop() <= 100 ) {
        $('#share-bar').removeClass('open');
        $('#share-bar').slideUp();
    }
});