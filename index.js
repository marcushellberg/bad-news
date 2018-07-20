import './news-article.js';
import { topHeadlinesUrl } from './newsApi.js';

window.addEventListener('load', () => {
  getNews();
  registerSW();
});

async function getNews() {
  const res = await fetch(topHeadlinesUrl);
  const json = await res.json();

  const main = document.querySelector('main');

  json.articles.forEach(article => {
    const el = document.createElement('news-article');
    el.article = article;
    main.appendChild(el);
  });
}

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js');
    } catch (e) {
      console.log(`SW registration failed`);
    }
  }
}
