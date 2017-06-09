$(document).ready(function(){
  $('.event-carousel').owlCarousel({
    margin: 10,
    loop: true,
    nav: true,
    dots: false,
    center: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsiveClass:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  $('.event-carousel .owl-item').each(function(){
    if($(this).hasClass('active')) {
        $(this).addClass('disabled');
    }
    if($(this).hasClass('center')) {
      $(this).removeClass('disabled');
    }
});
  $('.slider-carsoual').owlCarousel({
    margin: 10,
    loop: false,
    dots: true,
    animateIn: 'slideIn',
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  $("[data-fancybox]").fancybox({
		// Options will go here
    animationEffect : "zoom",
    // Duration in ms for open/close animation
	  animationDuration : 366,
    zoomOpacity : 'auto',
	});
});
