export const inspTemplate = `
<li class="swiper-slide inspiration__slide room">
  <div class="room__image-box">
    <img class="room__image swiper-lazy" data-src="{{picUrl}}" alt="{{name}}">
    <div class="swiper-lazy-preloader"></div>
  </div>
  <a class="room__link" href="#"></a>
  <div class="room__content">
    <div class="room__info">
      <p class="room__description">{{description}}</p>
      <h3 class="room__title">{{name}}</h3>
    </div>
    <a class="room__arrow" href="#">
      <svg class="room__icon">
        <use xlink:href="./assets/images/sprite.svg#arrow"></use>
      </svg>
    </a>
  </div>
</li>
`;