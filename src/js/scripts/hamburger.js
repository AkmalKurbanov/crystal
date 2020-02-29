$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
    $('.menu').toggleClass('menu-open');
    $('body').toggleClass('body-scroll')
  });
});