import Mustache from './mustache';

// главный слайдер
import lead from './lead/data.json';
import { leadTemplate } from './lead/template.js';
// каталог
import catalog from './catalog/data.json';
import { catalogTemplate } from './catalog/template.js';
// комнаты
import inspiration from './inspiration/data.json';
import { inspTemplate } from './inspiration/template.js';
// статьи
import tips from './tips/data.json';
import { tipsTemplate } from './tips/template.js';

const leadBox = document.querySelector('#lead');
const catalogBox = document.querySelector('#catalog');
const inspBox = document.querySelector('#inspiration');
const tipsBox = document.querySelector('#tips');

lead.forEach(item =>  item.price = `Rp ${formatPrice(item.price)}`)

catalog.forEach(item => {
  // вывод лейбла со скидкой
  if (item.priceOld > item.priceNew) {
    item.sale = Math.floor(100 - (item.priceNew * 100 / item.priceOld));
    item.isSale = true;
  }

  item.priceOld = `Rp ${formatPrice(item.priceOld)}`;
  item.priceNew = `Rp ${formatPrice(item.priceNew)}`;
});


// рендер элементов
renderTemplate(lead, leadBox, leadTemplate);
renderTemplate(catalog, catalogBox, catalogTemplate);
renderTemplate(inspiration, inspBox, inspTemplate);
renderTemplate(tips, tipsBox, tipsTemplate);

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function renderTemplate(data, parentBox, template) {
  data.forEach(function (item, i) {
    parentBox.insertAdjacentHTML('beforeend', Mustache.render(template, item))
  });
}