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


  // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
});
