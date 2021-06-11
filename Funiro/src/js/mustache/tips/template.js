export const tipsTemplate = `
<li class="swiper-slide tips__slide article">
  <div class="article__image-box">
    <img class="article__image swiper-lazy" data-src="{{picUrl}}" alt="{{name}}">
    <div class="swiper-lazy-preloader"></div>
  </div>
  <a class="article__link" href="#"></a>
  <div class="article__info">
    <h3 class="article__title">{{name}}</h3>
    <p class="article__date">{{date}}</p>
  </div>
</li>
`;