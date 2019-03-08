import './news-article';
import { topHeadlinesUrl } from './newsApi';
import { LitElement, html, css } from 'lit-element';

class NewsApp extends LitElement {
  static properties = {
    articles: Array
  };

  constructor() {
    super();
    this.articles = [];
  }

  static styles = css`
    :host {
      font-weight: 300;
      margin: 16px;
      min-height: 100vh;
      font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI';
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin: 16px 0;
    }

    header h1 {
      text-transform: uppercase;
      font-weight: 300;
      margin: 0;
    }

    header vaadin-combo-box {
      margin-left: 16px;
      min-width: 300px;
    }

    main {
      display: grid;
      grid-gap: 30px;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-auto-rows: max-content;
      grid-auto-flow: row dense;
    }
  `;

  render() {
    return html`
      <header>
        <h1>Bad News!</h1>
      </header>
      <main>
        ${this.articles.map(
          article => html`
            <news-article .article=${article}></news-article>
          `
        )}
      </main>
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
