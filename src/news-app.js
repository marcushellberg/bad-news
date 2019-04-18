import './news-article';
import { topHeadlinesUrl } from './newsApi';
import { LitElement, html, property, css } from 'lit-element';

class NewsApp extends LitElement {
  @property({ type: Array })
  articles = [];

  static styles = css`
    :host {
      display: grid;
      grid-gap: 30px;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-auto-rows: max-content;
      grid-auto-flow: row dense;
    }
  `;

  render() {
    return html`
      ${this.articles.map(
        article => html`
          <news-article .article=${article}></news-article>
        `
      )}
    `;
  }

  firstUpdated() {
    this.getNews();
  }

  async getNews() {
    const res = await fetch(topHeadlinesUrl);
    const json = await res.json();

    this.articles = json.articles;
  }
}

customElements.define('news-app', NewsApp);
