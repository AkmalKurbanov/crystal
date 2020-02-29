if ($(window).width() > 575) {
  var distance = $("#container").offset().left;
  $('.services__wrap:even').css('margin-left', distance + 15);
  $('.services__wrap:odd').css('margin-right', distance + 15);
  $('.contacts__form-wrap').css('padding-left', distance + 15);
  $('.services__wrap:odd .services__desc').css('padding-left', distance + 15);
}


// phone mask
$(".phone-js").inputmask({
  "mask": "0 (999) 999-999"
});
// phone mask end 



// btn effect
$(".btn__inner").mouseenter(function (e) {
  var parentOffset = $(this).offset();
  
  var relX = e.pageX - parentOffset.left;
  var relY = e.pageY - parentOffset.top;
  $(this).prev(".btn__circle").css({
    "left": relX,
    "top": relY
  });
  $(this).prev(".btn__circle").removeClass("desplode-circle");
  $(this).prev(".btn__circle").addClass("explode-circle");
  
});

$(".btn__inner").mouseleave(function (e) {
  
  var parentOffset = $(this).offset();
  
  var relX = e.pageX - parentOffset.left;
  var relY = e.pageY - parentOffset.top;
  $(this).prev(".btn__circle").css({
    "left": relX,
    "top": relY
  });
  $(this).prev(".btn__circle").removeClass("explode-circle");
  $(this).prev(".btn__circle").addClass("desplode-circle");
  
});
// btn effect end




// animation
if ($(window).width() > 575) {
  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: false,
    live: true,
    callback: function (box) {

    },
    scrollContainer: null
  });
  wow.init();
}

// animation end



// thanks message

//E-mail Ajax Send
$('form').submit(function () {
  var th = $(this);
  $.ajax({
    type: 'POST',
    url: 'mail.php',
    data: th.serialize()
  }).done(function () {
    $('.popup-wrap').css('display', 'flex');
    $('body').addClass('body-scroll');
  });
  return false;
});
// // thanks message end

$('.popup-wrap').on('click', function () {
  $('body').removeClass('body-scroll');
  $(this).hide();
});