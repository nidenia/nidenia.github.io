export const leadTemplate = `
<li class="swiper-slide lead__slide product">
  <div class="product__image-box">
    <img class="product__image swiper-lazy" data-src="{{picUrl}}" alt="{{name}}">
    <div class="swiper-lazy-preloader"></div>
  </div>
  <a class="product__link" href="#"></a>
  <section class="product__info">
    <div>
      <h3 class="product__title">{{name}}</h3>
      <p class="product__description">{{description}}</p>
      <p class="product__price">{{price}}</p>
    </div>
    <a href="#">             
      <svg class="product__icon">
        <use xlink:href="./assets/images/sprite.svg#arrow"></use>
      </svg>
    </a>
  </section>
</li>
`;