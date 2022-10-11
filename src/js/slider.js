import Swiper, { Autoplay, Pagination, EffectFade } from 'swiper';

Swiper.use([Autoplay, Pagination, EffectFade]);

const swiper = new Swiper('.gallary', {
  direction: 'horizontal',
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  speed: 1000,
  modules: [Autoplay, EffectFade],
  effect: 'fade',
  fadeEffect: { crossFade: true },
  allowTouchMove: false,
});

const slider = new Swiper('.reviews__container-slider', {
  direction: 'horizontal',
  loop: true,
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  nested: true,
  rewind: true,
  spaceBetween: 50,
});
