import './news-article';
import { topHeadlinesUrl } from './newsApi';
import './styles.css';
import { render, html } from 'lit-html';

window.addEventListener('load', () => {
  getNews();
});

const getNews = async () => {
  const res = await fetch(topHeadlinesUrl);
  const json = await res.json();

  const articles = json.articles;
  const main = document.querySelector('main');
  render(
    html`
      ${articles.map(
        article => html`
          <news-article .article=${article}></news-article>
        `
      )}
    `,
    main
  );
};

// customElements.define('news-app', NewsApp);
