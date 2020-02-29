// scroll button 
function scrollToSection(event) {
  event.preventDefault();
  var $section = $($(this).attr('href'));
  if ($(window).width() > 575) {
    $('html, body').animate({
      scrollTop: $section.offset().top - stickyHeader
    }, 700);
  } else {
    $('html, body').animate({
      scrollTop: $section.offset().top
    }, 700);
  }

}
$('[data-scroll]').on('click', scrollToSection);
// scroll button end


// sticky header
var stickyHeader = $('.sticky-header').outerHeight();
jQuery(window).scroll(function () {
  var stickyHeader = jQuery('.entry').offset().top;
  if (jQuery(this).scrollTop() > stickyHeader) {
    $(".sticky").css('transform', 'translateY(0)');

  } else {
    $(".sticky").css('transform', 'translateY(-200%)');
  }
});

var headerTop = $('.header__to').outerHeight();
jQuery(window).scroll(function () {
  var headerTop = jQuery('.header__masterbar').offset().top;
  if (jQuery(this).scrollTop() > headerTop) {
    $(".social-float").css('transform', 'translateX(0)');

  } else {
    $(".social-float").css('transform', 'translateX(-100%)');
  }
});

// sticky header end

$('.menu .nav__link').on('click', function () {
  $('body').removeClass('body-scroll');
  $('.menu').removeClass('menu-open');
  $('.hamburger').removeClass('is-active');
});



  $('.sticky__nav .nav__item').removeAttr('data-wow-duration , data-wow-delay');
  $('.sticky__nav .nav__item').removeClass('wow fadeInDown');