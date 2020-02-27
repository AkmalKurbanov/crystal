   var swiper = new Swiper('.entry-js');

   var swiper = new Swiper('.partners-js', {
      slidesPerView: 5,
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      autoplay: {
         delay: 3500,
         disableOnInteraction: false,
      },
   });

   var swiper = new Swiper('.reviews-js', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      autoplay: {
         delay: 3500,
         disableOnInteraction: false,
      },
      pagination: {
         el: '.swiper-pagination',
         clickable: true
      }
   });