import { LitElement, css, html } from 'lit-element';

class NewsArticle extends LitElement {
  static properties = {
    article: Object
  };

  static styles = css`
    h2 {
      font-family: Georgia, 'Times New Roman', Times, serif;
    }

    a,
    a:visited {
      text-decoration: none;
      color: inherit;
    }

    img {
      width: 100%;
    }
  `;

  render() {
    return this.article
      ? html`
          <a href="${this.article.url}">
            <h2>${this.article.title}</h2>
            <img src="${this.article.urlToImage ? this.article.urlToImage : ''}" />
            <p>${this.article.description}</p>
          </a>
        `
      : html``;
  }
}

customElements.define('news-article', NewsArticle);
