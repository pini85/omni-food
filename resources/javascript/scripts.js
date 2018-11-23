$(document).ready(function() {

  /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '100px;'
    });

  $('.js--scroll-to-plans').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top -60 }, 1000);
  });

  $('.js--scroll-to-start').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top -80 }, 1000);
  });

  $('.js--scroll-to-steps').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-steps').offset().top -60 }, 1000);
  });

  $('.js--scroll-to-cities').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-cities').offset().top -60 }, 1000);
  });

  $('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeIn');
  }, {
    offset: '50%'
  });

  $('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated fadeInUp');
  }, {
    offset: '70%'
  });

   $('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated fadeIn');
  }, {
    offset: '50%'
  });

   $('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated pulse');
  }, {
    offset: '50%'
  });

   /* Mobile navigation */
   $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(300);

        if (icon.hasClass('fas fa-bars')) {
          icon.removeClass('fa-bars');
          icon.addClass('fa-times');

        } else {
          icon.removeClass('fa-times');
          icon.addClass('fa-bars');

        }
    });

  });
