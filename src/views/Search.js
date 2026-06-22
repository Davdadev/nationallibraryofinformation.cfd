import { pageHero, articleCard, collectionCard } from "../components/helpers.js";
import { pages, collections, articles } from "../data/site.js";

function scoreArticle(a, q) {
  const hay = [a.title, a.excerpt, a.author, a.category, ...(a.tags || [])].join(" ").toLowerCase();
  return hay.includes(q) ? 1 : 0;
}

function scoreCollection(c, q) {
  const hay = [c.title, c.summary, c.slug].join(" ").toLowerCase();
  return hay.includes(q) ? 1 : 0;
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
        ${collectionResults.map(collectionCard).join("")}
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <div><h2>Matching articles</h2><p>${articleResults.length} results found.</p></div>
      </div>
      <div class="grid cols-2">
        ${articleResults.map(articleCard).join("")}
      </div>
    </section>
  `;
}
