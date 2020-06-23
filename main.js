 jQuery(function($) {
    $(window).on('scroll', function() {
    if ($(this).scrollTop() >= 400) {
      $('.navbar').addClass('fixed-top');
    } else if ($(this).scrollTop() <= 399) {
      $('.navbar').removeClass('fixed-top', );
    }
    if ($(this).scrollTop() >= 1200) {
      $('.navbar').addClass('fixed-top2');
    } else if ($(this).scrollTop() <= 1199) {
      $('.navbar').removeClass('fixed-top2', );
    }
   

  })});
 