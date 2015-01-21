// Spark Backbone JS application

(function($){

// Spark Application
  var AppView = Backbone.View.extend({
  		el: '#infograph_application',

  		// Default Variables for Application
  		defaults: function() {
  			return {

  			}
  		},

  		//Delegated Events for user actions
  		events: {
      		"click .menu-button": "toggleNav",
            "click .post-preview": "toggleInfographic"
  		},


  		//Initialization function
  		initialize: function(){
          this.initOwl();
  		},

  		initOwl: function(){

            var owl = $('#menu');

            owl.owlCarousel({

            lazyLoad : true,
            margin: 20,
            loop: true,
                navigation : false, // Show next and prev buttons
                pagination: false,
                responsiveRefreshRate: 0,
                responsive:{
                    0: {
                        items: 1
                    },
                    500:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                }
            });
            
            $('header .next').click(function() {
                owl.trigger('next.owl.carousel');
            })
            
            // Go to the previous item
            $('header .prev').click(function() {
                // With optional speed parameter
                // Parameters has to be in square bracket '[]'
                owl.trigger('prev.owl.carousel', [300]);
            });
                
            var sync1 = $('#opinionpieces'),
            sync2 = $('#opinionsources'),
            flag = false,
            duration = 300;
            
            sync1.owlCarousel({
                autoHeight: true,
                animateIn: 'fadeInDown',
                items: 1,
                margin: 100,
                mouseDrag: false,
                nav: false,
                responsiveRefreshRate: 0,
                stagePadding:0,
            })
            .on('changed.owl.carousel', function (e) {
                if (!flag) {
                    flag = true;
                    sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });
            
            sync2.owlCarousel({
                items: 3,
                nav: false,
                responsiveRefreshRate: 0,
                responsive:{
                    0: {
                        items: 1,
                        margin: 60
                    },
                    500:{
                        items:2,
                        margin: 60
                    },
                    800: {
                        items:3,
                        margin: 40
                    },
                    1000:{
                        margin: 120
                    }
                },
                startPosition: 1,
            })
            .on('click', '.owl-item', function () {
                sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);

            })
            .on('changed.owl.carousel', function (e) {
                if (!flag) {
                    flag = true;        
                    sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });
            //Hide/Show Opinion Pieces
            sync1.hide();
            $('.source').click(function() {
                if (sync1.hasClass('closed')) {
                    sync1.slideToggle();
                    sync1.removeClass('closed');
                }
                else if ($(this).hasClass('current')) {
                    if (!sync1.hasClass('closed')) {
                        sync1.slideToggle();
                        sync1.addClass('closed');
                    }
                }
            });
            $('.closequote').click(function() {
                if (!sync1.hasClass('closed')) {
                    sync1.slideToggle();
                    sync1.addClass('closed');
                }
            });
            $('.source').click(function() {
                $(this).toggleClass( 'current');
                $('.source').not(this).removeClass('current');
            });

  		},

        toggleNav: function(){
            $("#site-menu").toggleClass('on');
        },
        toggleInfographic: function(){
            $('#infographic').toggleClass('open');
            $('#article').toggleClass('open');
        }
  });


  $(document).ready(function(){
  		var App = new AppView;
  })
  

})(jQuery);