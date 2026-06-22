import { pageHero, escapeHtml } from "../components/helpers.js";
import { pages, collections, articles } from "../data/site.js";

function scoreArticle(a, q) {
  const hay = [a.title, a.excerpt, a.author, a.category, ...(a.tags || [])].join(" ").toLowerCase();
  return hay.includes(q) ? 1 : 0;
}

function scoreCollection(c, q) {
  const hay = [c.title, c.summary, c.slug].join(" ").toLowerCase();
  return hay.includes(q) ? 1 : 0;
}

function highlight(text, query) {
  const escaped = escapeHtml(text);
  if (!query) return escaped;
  const queryEscaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return escaped.replace(new RegExp(`(${queryEscaped})`, "gi"), "<mark>$1</mark>");
}

function renderCollectionResult(collection, query) {
  return `
    <article class="card collection-card">
      <div class="collection-emoji">${escapeHtml(collection.icon)}</div>
      <h3>${highlight(collection.title, query)}</h3>
      <p>${highlight(collection.summary, query)}</p>
      <div class="card-meta">
        <span>${escapeHtml(collection.stats)}</span>
        <a href="#/collection/${collection.slug}">View collection</a>
      </div>
    </article>
  `;
}

function renderArticleResult(article, query) {
  return `
    <article class="card article-card">
      <div class="article-card-top">
        <span class="pill">${escapeHtml(article.category)}</span>
        <span class="muted">${escapeHtml(article.readingTime)}</span>
      </div>
      <h3><a href="#/article/${article.slug}">${highlight(article.title, query)}</a></h3>
      <p>${highlight(article.excerpt, query)}</p>
      <div class="tag-row">${article.tags.map((tag) => `<span class="tag">${highlight(tag, query)}</span>`).join("")}</div>
      <div class="card-meta">
        <span>${escapeHtml(article.author)}</span>
        <span>${escapeHtml(article.date)}</span>
      </div>
    </article>
  `;
}

export function SearchView() {
  const allQuery = (new URLSearchParams(location.hash.split("?")[1] || "")).get("q") || "";
  const query = allQuery.toLowerCase().trim();
  const articleResults = query ? articles.filter(a => scoreArticle(a, query)) : articles.slice(0, 6);
  const collectionResults = query ? collections.filter(c => scoreCollection(c, query)) : collections;

  return `
    ${pageHero(pages.search.title, pages.search.intro, "Search")}
    <section class="section">
      <div class="toolbar" style="padding-left:0;padding-right:0">
        <form class="searchbar" onsubmit="return false;">
          <input id="search-input" type="search" placeholder="Search archive content" value="${query}">
          <button id="search-button" type="button">Search</button>
        </form>
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <div><h2>Matching collections</h2><p>Results based on the current query.</p></div>
      </div>
      <div class="grid cols-2">
        ${collectionResults.map((collection) => renderCollectionResult(collection, query)).join("")}
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <div><h2>Matching articles</h2><p>${articleResults.length} results found.</p></div>
      </div>
      <div class="grid cols-2">
        ${articleResults.map((article) => renderArticleResult(article, query)).join("")}
      </div>
    </section>
  `;
}
