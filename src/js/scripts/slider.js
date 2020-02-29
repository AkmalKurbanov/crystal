      var swiper = new Swiper('.entry-js', {
         effect: 'fade',
         loop: true,
         autoplay: {
            delay: 5000,
            disableOnInteraction: false,
         },
      });
      var swiper = new Swiper('.partners-js', {
         slidesPerView: 5,
         spaceBetween: 30,
         loop: true,
         centeredSlides: true,
         autoplay: {
            delay: 2500,
            disableOnInteraction: false,
         },
         breakpoints: {
            320: {
               slidesPerView: 1,
            },
            576: {
               slidesPerView: 3,
            },
            768: {
               slidesPerView: 3,
            },
            992: {
               slidesPerView: 5,
            },
         }
      });

      var swiper = new Swiper('.reviews-js', {
         slidesPerView: 3,
         spaceBetween: 30,
         loop: true,
         autoplay: {
            delay: 3500,
            disableOnInteraction: false,
         },
         pagination: {
            el: '.swiper-pagination',
            clickable: true
         },
         breakpoints: {
            320: {
               slidesPerView: 1,
            },
            768: {
               slidesPerView: 2,
            },
            1199: {
               slidesPerView: 3,
            },
         }
      });