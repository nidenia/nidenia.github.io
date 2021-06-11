export const catalogTemplate = `
<li class="swiper-slide our-products__item catalog-item">
  <div class="catalog-item__image-box">
    <img data-src="{{picUrl}}" alt="{{name}}" class="catalog-item__image swiper-lazy">
    <div class="swiper-lazy-preloader"></div>
  </div>
  <div class="catalog-item__info">
    <h3 class="catalog-item__title">{{name}}</h3>
    <p class="catalog-item__description">{{description}}</p>
    <div class="catalog-item__price-box">
    {{#isSale}}
      <p class="catalog-item__price-new">{{priceNew}}</p>
      <p class="catalog-item__price-old">{{priceOld}}</p>
    {{/isSale}}
    {{^isSale}}
      <p class="catalog-item__price-new">{{priceNew}}</p>
    {{/isSale}}
    </div>
  </div>
  <div class="catalog-item__label-box">
  {{#isSale}}
    <span class="catalog-item__label catalog-item__label--sale">-{{sale}}%</span>
  {{/isSale}}
  {{#isNew}}
    <span class="catalog-item__label catalog-item__label--new">New</span>
  {{/isNew}}
  </div>
  <div class="catalog-item__overlay">
    <a class="catalog-item__link" href="{{id}}"></a>
    <div class="catalog-item__button-box">
      <button class="catalog-item__button catalog-item__button--cart" aria-label="Add to cart">
      Add to cart
      <svg class="catalog-item__icon catalog-item__icon--mobile">
          <use xlink:href="./assets/images/sprite.svg#cart"></use>
        </svg>
      </button>
      <button class="catalog-item__button catalog-item__button--share" aria-label="Share">
        <svg class="catalog-item__icon">
          <use xlink:href="./assets/images/sprite.svg#share"></use>
        </svg>
        Share
      </button>
      <button class="catalog-item__button catalog-item__button--like" aria-label="Like">
        <svg class="catalog-item__icon">
          <use xlink:href="./assets/images/sprite.svg#fav"></use>
        </svg>
        Like
      </button>
    </div>
  </div>
</li>
`;