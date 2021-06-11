import '@/scss/index.scss';
import '@/index.html';
import './mustache/render';
import './header-menu';
import './sliders';
import './spoiler';

// импорт изображений, не используемых в html и css напрямую
function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('@/assets/images', true, /\.jpg$/));