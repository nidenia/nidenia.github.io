import Swiper from './helpers/swiper-min';
import {Lazy} from './helpers/swiper-min';

const clients = new Swiper('.lead__slider', {
  loop: true,
  slidesPerView: 1,
  speed: 800,
  preloadImages: false,
  loadPrevNext: true,
  lazy: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});