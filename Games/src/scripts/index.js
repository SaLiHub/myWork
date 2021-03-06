'use strict';

(function executeAllSliders() {
  // slider1
  Swiper('#swiper-banner', {
    direction: 'vertical',
    slidesPerView: 1,
    slidesPerGroup: 1,
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: false,
      slideShadows: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // slider2
  Swiper('#swiper-container-1', {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 1,
    navigation: {
      prevEl: '#swiper-button-prev-1',
      nextEl: '#swiper-button-next-1',
    },
  });

  // section 3
  Swiper('#swiper-container-2', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 130,
    loop: true,
    // touchRatio: 0,
    navigation: {
      nextEl: '#swiper-button-next-2',
      prevEl: '#swiper-button-prev-2',
    },
  });
})();
