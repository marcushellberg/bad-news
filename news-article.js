class NewsArticle extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
  }
  set article(article) {
    this.root.innerHTML = `
          <style>
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
          </style>
          <a href="${article.url}">
            <h2>${article.title}</h2>
            <img src="${article.urlToImage ? article.urlToImage : ''}">
            <p>${article.description}</p>
          </a>`;
  }
}

customElements.define('news-article', NewsArticle);
