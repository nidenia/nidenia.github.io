import Swiper from './swiper-bundle.min';

const lead = new Swiper('.lead__slider', {
  slidesPerView: 1,
  initialSlide: 1,
  spaceBetween: 32,
  centeredSlides: true,
  loop: true,
  loopedSlides: 3,
  speed: 800,
  autoplay: true,
  observer: true,
  observeParents: true,
  preloadImages: false,
  lazy: true,
  watchSlidesVisibility: true,

  breakpoints: {
    320: {
      slidesPerView: 1
    },
    992: {
      slidesPerView: 'auto',
      autoplay: false
    },
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const catalog = new Swiper('.our-products__slider', {
  slidesPerView: 4,
  slidesPerColumn: 1,
  spaceBetween: 16,
  speed: 800,
  preloadImages: false,
  lazy: true,
  watchSlidesVisibility: true,
  autoplay: {
    delay: 4000,
    pauseOnMouseEnter: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 1.5,
    },
    600: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 2.5,
    },
    950: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
    }
  }
});

const inspiration = new Swiper('.inspiration__slider', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  speed: 900,
  loop: true,
  preloadImages: false,
  lazy: true,
  watchSlidesVisibility: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
  },

  breakpoints: {
    320: {
      slidesPerView: 1
    },

    404: {
      slidesPerView: 'auto'
    },
  },
});

const tips = new Swiper('.tips__slider', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 35,
  speed: 900,
  loop: true,
  preloadImages: false,
  lazy: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    840: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
    1300: {
      spaceBetween: 35,
    }
  },
});

const share = new Swiper('.share__slider', {
  direction: 'horizontal',
  slidesPerView: "auto",
  freeMode: true,
  preloadImages: false,
  lazy: true,
  watchSlidesVisibility: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: true,
});