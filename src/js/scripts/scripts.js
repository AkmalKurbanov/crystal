var distance = $("#container").offset().left;
$('.services__wrap:even').css('margin-left', distance + 15);
$('.services__wrap:odd').css('margin-right', distance + 15);
$('.contacts__form-wrap').css('padding-left', distance + 15);
$('.services__wrap:odd .services__desc').css('padding-left', distance + 15);