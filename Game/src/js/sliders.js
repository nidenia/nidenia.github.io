import Swiper from './swiper-bundle.min';

const agentsSlider = new Swiper('.agents-slider__container', {
  slidesPerView: 3.5,
  speed: 400,
  spaceBetween: 60,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 1.5,
    },
    767: {
      slidesPerView: 2,
    },
    1023: {
      slidesPerView: 2.5,
    },
    1920: {
      slidesPerView: 3.5,
    },
  }
});

const abilities = document.querySelectorAll('.abilities-slider');

abilities.forEach(item => {
  new Swiper(item, {
    slidesPerView: 'auto',
    freeMode: true,
    speed: 400,
    spaceBetween: 80,
    observer: true,
    observeParents: true,

    breakpoints: {
      320: {
        spaceBetween: 30
      },
      500: {
        spaceBetween: 40
      },
      1023: {
        spaceBetween: 80
      }
    }
  });
});