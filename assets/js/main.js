(function ($) {

    "use strict";

    jQuery(document).ready(function($){

        $('.popup-video').magnificPopup({
            type:'iframe'
          });


          $('.counter').counterUp({
              delay: 10,
              time: 1000,
          });

          $('.testimonial-active').owlCarousel({
            loop:true,    
            dotsEach:true,
            autoplay:true,     
           responsive:{
               0:{
                   items:1
               },
               600:{
                   items:1
               },
               1000:{
                   items:1
               }
           }
          });
          
          $('#mobile-menu').meanmenu({
              meanMenuContainer: '.mobile-menu',
              meanScreenWidth: "992",
          
              });       

      
    }); 


}(jQuery));


















 