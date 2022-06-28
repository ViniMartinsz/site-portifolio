(function($) {
    'use strict'; // Start of use strict

    /*------------------------------------------------------------------
     	Scrool Top
     ------------------------------------------------------------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*------------------------------------------------------------------
        Header Navigation
    ------------------------------------------------------------------*/
    var windowSize = $(window).width();

    if (windowSize >= 767) {
        $('ul.nav li.dropdown').hover(function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
        }, function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
        });
    }
	 /*------------------------------------------------------------------
        Header Search
        ------------------------------------------------------------------*/
     $("#search-form").hide();
     $(".fa-search").on('click', function() {
         $("#search-form").toggle();
         $("#search-form").fadeIn().addClass("open");
     });
     $("#search-form .close").on('click', function() {
         $("#search-form").fadeOut().removeClass("open");
         $("#this").hide();
     });
    /*------------------------------------------------------------------
        Loader
    ------------------------------------------------------------------*/

    $("#dvLoading").fadeOut("fast");

    // map zooming 	
    $('.google-map').on('click', function() {
        $('.google-map').find('iframe').css("pointer-events", "auto");
    });
	/*------------------------------------------------------------------
    FAQ
    ------------------------------------------------------------------*/
    $('.panel-heading a').on('click', function() {
        $('.panel-heading').removeClass('active');
        $(this).parents('.panel-heading').addClass('active');
    });
   /*------------------------------------------------------------------
    Owl Carousel for screenshots
	------------------------------------------------------------------*/
    var owl = $("#testimonials");
    owl.owlCarousel({
        nav: true,
        margin: 10,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 2
            },
            600: {
                items: 2
            },
            700: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 3
            },
            1400: {
                items: 3
            },
            1600: {
                items: 3
            }
        }
    });
    $(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $(".owl-next").html('<i class="fa fa-chevron-right"></i>');
	/*------------------------------------------------------------------
    Owl Carousel for Testimonials
	------------------------------------------------------------------*/
    var owl = $("#our-testimonials");
    owl.owlCarousel({
        nav: true,
        margin: 0,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1
            },
            600: {
                items: 1
            },
            700: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            },
            1400: {
                items: 1
            },
            1600: {
                items: 1
            }
        }
		
    });
	 /*------------------------------------------------------------------
    Video Popup
    ------------------------------------------------------------------*/
    var $popupVideo = $('[data-popup="video"]');

    if ($popupVideo.length) {
        $popupVideo.magnificPopup({
            type: 'iframe'
        });
    }
	/*---------------------------------------------------------------------
    		Magnific Popup 
        ------------------------------------------------------------------------*/
    if ($('.front-gallery, .gallery-section').length) {

        $('.front-gallery, .gallery-section').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by sbtechnosoft</small>';
                }
            }
        });
    }
    if ($('.image-popup-no-margins').length) {

        $('.image-popup-no-margins').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            fixedContentPos: true,
            mainClass: 'mfp-no-margins mfp-with-zoom',
            image: {
                verticalFit: true
            },
            zoom: {
                enabled: true,
                duration: 300
            }
        });
    }
	/*---------------------------------------------------------------------
    Gallery Post Hove Effect for Caption Script
    ------------------------------------------------------------------------*/
    function gallery_hover() {

        if ($(".gallery-caption img").length) {
            $(".gallery-caption img").on('mouseover', function() {
                var img_width = $(".gallery-caption img").width();
                var img_height = $(".gallery-caption img").height();
                $(".gallery-caption .blur").css({
                    "height": img_height,
                    "width": img_width
                });
            });
        }
    }
    gallery_hover();
	/*------------------------------------------------------------------
   		 Animation Numbers
   	------------------------------------------------------------------*/
        jQuery('.animateNumber').each(function() {
            var num = jQuery(this).attr('data-num');

            var top = jQuery(document).scrollTop() + (jQuery(window).height());
            var pos_top = jQuery(this).offset().top;
            if (top > pos_top && !jQuery(this).hasClass('active')) {
                jQuery(this).addClass('active').animateNumber({
                    number: num
                }, 2000);
            }
        });
        jQuery('.animateProcent').each(function() {
            var num = jQuery(this).attr('data-num');
            var percent_number_step = jQuery.animateNumber.numberStepFactories.append('%');
            var top = jQuery(document).scrollTop() + (jQuery(window).height());
            var pos_top = jQuery(this).offset().top;
            if (top > pos_top && !jQuery(this).hasClass('active')) {
                jQuery(this).addClass('active').animateNumber({
                    number: num,
                    numberStep: percent_number_step
                }, 2000);
                jQuery(this).css('width', num + '%');
            }
        });
    /*------------------------------------------------------------------
    Video Popup
    ------------------------------------------------------------------*/
    var $popupVideo = $('[data-popup="video"]');

    if ($popupVideo.length) {
        $popupVideo.magnificPopup({
            type: 'iframe'
        });
    }

})(jQuery);

/*------------------------------------------------------------------
	WOW
------------------------------------------------------------------*/

wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();