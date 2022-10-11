import Swiper, { Autoplay, Pagination, EffectFade } from 'swiper';

const swiper = new Swiper('.gallary', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  speed: 1000,
  modules: [Autoplay, EffectFade],
  effect: 'fade',
  fadeEffect: { crossFade: true },
});

const slider = new Swiper('.reviews__container-slider', {
  direction: 'horizontal',
  loop: true,
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
