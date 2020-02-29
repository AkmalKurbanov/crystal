if ($(window).width() > 575) {
  $('.services__wrap').on('mousemove', function (e) {
    var amountMovedX = 20 - 30 * ((e.pageX + 1) / $(document).width());
    var amountMovedY = 90 - 30 * ((e.pageY + 1) / $(window).height());

    $(this).find('.services__img, .services__desc i').css({
      'margin-left': '-' + amountMovedX + 'px',
      'margin-top': '-' + amountMovedY + 'px'
    });


  });

  $('.contacts').on('mousemove', function (e) {
    var amountMovedX = 20 - 30 * ((e.pageX + 1) / $(document).width());
    var amountMovedY = 80 - 30 * ((e.pageY + 1) / $(window).height());

    $(this).find('.contacts__map-overlay').css({
      'margin-left': '-' + amountMovedX + 'px',
      'margin-top': '-' + amountMovedY + 'px'
    });


  });


}








$('.wrapper').on('mousemove', function (e) {
  mouseX = e.pageX, mouseY = e.pageY, moveFactor = 20, windowWidth = $(this).width(), windowHeight = $(this).height();
  percentX = ((mouseX / windowWidth) * moveFactor - moveFactor / 2);
  percentY = ((mouseY / windowHeight) * moveFactor - moveFactor / 2);
  leftString = percentX + "px";
  topString = percentY + "px";
  if (percentX < (windowWidth / 2)) {
    leftString = -percentX + "px";
  }

  if (percentY < (windowHeight / 2)) {
    topString = -percentY + "px";
  }

  bgPos = leftString + " " + topString;
  $(this).find('.advantages span').attr("style", "background-position: " + bgPos);

});